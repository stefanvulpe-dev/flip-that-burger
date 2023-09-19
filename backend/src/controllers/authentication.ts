import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import * as jwt from 'jsonwebtoken';
import { z } from 'zod';
import { TokensRepository, UsersRepository } from '../repositories';
import {
  CustomRequest,
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
} from '../utils/';

export async function register(req: ExpressRequest, res: ExpressResponse) {
  try {
    const User = z.object({
      firstName: z.string({
        required_error: 'First name is required',
        invalid_type_error: 'First name must be a string',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
        invalid_type_error: 'Last name must be a string',
      }),
      email: z.string().email({
        message: 'Invalid email',
      }),
      username: z
        .string()
        .regex(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[._][a-zA-Z0-9]+)?$/i, {
          message:
            'Username must be between 8 to 18 characters long and can only contain letters, numbers, underscores and dots',
        }),
      password: z
        .string()
        .regex(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
          {
            message:
              'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
          },
        ),
    });

    User.parse(req.body);

    const { email, password } = req.body;

    const existingUser = await UsersRepository.getUserByEmail(email);

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await hashPassword(password);

    const user = await UsersRepository.createUser({
      ...req.body,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await TokensRepository.createToken(refreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/auth',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.status(201).json({ accessToken });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(error.flatten());
    } else if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.sendStatus(400);
    }
  }
}

export async function login(req: ExpressRequest, res: ExpressResponse) {
  try {
    const User = z.object({
      username: z
        .string()
        .regex(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[._][a-zA-Z0-9]+)?$/i, {
          message:
            'Username must be between 8 to 18 characters long and can only contain letters, numbers, underscores and dots',
        }),
      password: z
        .string()
        .regex(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
          {
            message:
              'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
          },
        ),
    });

    User.parse(req.body);

    const { username, password } = req.body;

    const existingUser = await UsersRepository.getUserByUsername(
      username,
    ).select('password');

    if (!existingUser) {
      throw new Error('Invalid username');
    }

    await comparePassword(password, existingUser.password);

    const accessToken = generateAccessToken(existingUser._id);
    const refreshToken = generateRefreshToken(existingUser._id);

    await TokensRepository.createToken(refreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/auth',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.status(201).json({ accessToken });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(error.flatten());
    } else if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.sendStatus(400);
    }
  }
}

export async function logout(req: ExpressRequest, res: ExpressResponse) {
  try {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new Error('Refresh token is required');
    }

    await TokensRepository.deleteToken(refreshToken);

    res.clearCookie('refreshToken', { path: '/auth' });
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.sendStatus(400);
    }
  }
}

export async function refreshTokens(req: ExpressRequest, res: ExpressResponse) {
  try {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new Error('Refresh token is required');
    }

    const existingToken = await TokensRepository.getToken(refreshToken);

    if (!existingToken) {
      throw new Error('Invalid refresh token');
    }

    const payload = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!,
    ) as jwt.JwtPayload;

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
    if (error instanceof Error || error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: error.message });
    } else {
      return res.sendStatus(400);
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
      throw new Error('Missing authorization header');
    }

    const payload = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET!,
    ) as jwt.JwtPayload;

    req.userId = payload.userId;
    next();
  } catch (error) {
    if (error instanceof Error || error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: error.message });
    } else {
      return res.sendStatus(400);
    }
  }
}
