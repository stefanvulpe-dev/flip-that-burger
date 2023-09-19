import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateAccessToken(userId: Types.ObjectId) {
  return jwt.sign({ userId }, process.env.ACCES_TOKEN_SECRET || 'secret', {
    expiresIn: '15m',
  });
}

export function generateRefreshToken(userId: Types.ObjectId) {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET || 'secret', {
    expiresIn: '7d',
  });
}
