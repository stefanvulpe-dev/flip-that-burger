import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { z } from 'zod';
import { TokensRepository, UsersRepository } from '../repositories';
import { getFile, uploadFile } from '../services/s3Client';
import {
  CustomRequest,
  UserLoginSchema,
  UserRegisterSchema,
  buildError,
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
} from '../utils/';
const { TokenExpiredError, JsonWebTokenError, verify } = jwt;

export async function register(req: ExpressRequest, res: ExpressResponse) {
  try {
    if (!req.file) {
      throw buildError('photo', 'Photo is required');
    }
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(req.file.mimetype)) {
      throw buildError('photo', 'Photo must be in jpg, jpeg or png format');
    }

    UserRegisterSchema.parse(req.body);

    const { email, password } = req.body;

    const existingUser = await UsersRepository.getUserByEmail(email);

    if (existingUser) {
      throw buildError('email', 'Email is already registered');
    }

    const uploadedFile = await uploadFile(req.file);
    const photo = await getFile(uploadedFile);

    const hashedPassword = await hashPassword(password);

    const user = await UsersRepository.createUser({
      ...req.body,
      password: hashedPassword,
      image: uploadedFile,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await TokensRepository.createToken(refreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/auth',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.status(201).json({ accessToken, photo, username: user.username });
  } catch (error) {
    if (error instanceof z.ZodError) {
      let zodErrors = {};
      error.errors.forEach(err => {
        zodErrors = { ...zodErrors, [err.path[0]]: err.message };
      });
      return res.status(400).json(zodErrors);
    } else if (error instanceof Error) {
      if (error.name) {
        return res.status(400).json({ [error.name]: error.message });
      }
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function login(req: ExpressRequest, res: ExpressResponse) {
  try {
    UserLoginSchema.parse(req.body);

    const { username, password } = req.body;

    const existingUser = await UsersRepository.getUserByUsername(
      username,
    ).select({ password: 1, image: 1, username: 1 });

    if (!existingUser) {
      throw buildError('username', 'Invalid username');
    }

    const result = await comparePassword(password, existingUser.password);
    if (!result) {
      throw buildError('password', 'Invalid password');
    }

    const accessToken = generateAccessToken(existingUser._id);
    const refreshToken = generateRefreshToken(existingUser._id);

    await TokensRepository.createToken(refreshToken);

    const photo = await getFile(existingUser.image);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/auth',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res
      .status(201)
      .json({ accessToken, photo, username: existingUser.username });
  } catch (error) {
    if (error instanceof z.ZodError) {
      let zodErrors = {};
      error.errors.forEach(err => {
        zodErrors = { ...zodErrors, [err.path[0]]: err.message };
      });
      return res.status(400).json(zodErrors);
    } else if (error instanceof Error) {
      if (error.name) {
        return res.status(400).json({ [error.name]: error.message });
      }
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function logout(req: ExpressRequest, res: ExpressResponse) {
  try {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw buildError('refreshToken', 'Refresh token is required');
    }

    await TokensRepository.deleteToken(refreshToken);

    res.clearCookie('refreshToken', { path: '/auth' });
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name) {
        return res.status(400).json({ [error.name]: error.message });
      }
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function refreshTokens(req: ExpressRequest, res: ExpressResponse) {
  try {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw buildError('refreshToken', 'Refresh token is required');
    }

    const existingToken = await TokensRepository.getToken(refreshToken);

    if (!existingToken) {
      throw buildError('refreshToken', 'Invalid refresh token');
    }

    const payload = verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET || 'secret',
    ) as JwtPayload;

    const accessToken = generateAccessToken(payload.userId);
    const newRefreshToken = generateRefreshToken(payload.userId);

    await TokensRepository.deleteToken(refreshToken);
    await TokensRepository.createToken(newRefreshToken);

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      path: '/auth',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.status(201).json({ accessToken });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(403).json({ refreshToken: error.message });
    } else if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ refreshToken: error.message });
    } else if (error instanceof Error) {
      if (error.name) {
        return res.status(400).json({ [error.name]: error.message });
      }
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function checkAuth(
  req: CustomRequest,
  res: ExpressResponse,
  next: () => void,
) {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      throw buildError('headers', 'Missing authorization header');
    }

    const payload = verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET || 'secret',
    ) as JwtPayload;

    const user = UsersRepository.getUserById(payload.userId);
    if (!user) {
      throw buildError('headers', 'Invalid authorization header');
    }

    req.userId = payload.userId;
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(403).json({ jwt: error.message });
    } else if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ jwt: error.message });
    } else if (error instanceof Error) {
      if (error.name) {
        return res.status(400).json({ [error.name]: error.message });
      }
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
