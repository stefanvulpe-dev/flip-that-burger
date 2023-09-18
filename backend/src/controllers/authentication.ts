import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { z } from 'zod';
import { TokensRepository, UsersRepository } from '../repositories';
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
} from '../utils/';

export async function register(req: Request, res: Response) {
  try {
    const User = z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      username: z.string(),
      password: z.string(),
    });

    User.parse(req.body);

    const { email, password } = req.body;

    const existingUser = await UsersRepository.getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const user = await UsersRepository.createUser({
      ...req.body,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await TokensRepository.createToken(refreshToken);

    res.status(201).json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const User = z.object({
      username: z.string(),
      password: z.string().min(8),
    });

    User.parse(req.body);

    const { username, password } = req.body;

    const existingUser = await UsersRepository.getUserByUsername(username);

    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid username' });
    }

    await comparePassword(password, existingUser.password);

    const accessToken = generateAccessToken(existingUser._id);
    const refreshToken = generateRefreshToken(existingUser._id);

    await TokensRepository.createToken(refreshToken);

    res.status(201).json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export async function logout(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body;

    await TokensRepository.deleteToken(refreshToken);

    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export async function refreshTokens(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body;

    const existingToken = await TokensRepository.getToken(refreshToken);

    if (!existingToken) {
      return res.status(400).json({ message: 'Invalid refresh token' });
    }

    const payload = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!,
    ) as jwt.JwtPayload;

    const accessToken = generateAccessToken(payload.userId);
    const newRefreshToken = generateRefreshToken(payload.userId);

    await TokensRepository.deleteToken(refreshToken);
    await TokensRepository.createToken(newRefreshToken);

    res.status(201).json({ accessToken, refreshToken: newRefreshToken });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
