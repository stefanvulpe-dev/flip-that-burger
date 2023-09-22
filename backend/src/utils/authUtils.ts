import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
const { sign } = jwt;

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateAccessToken(userId: Types.ObjectId) {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET || 'secret', {
    expiresIn: '15m',
  });
}

export function generateRefreshToken(userId: Types.ObjectId) {
  return sign({ userId }, process.env.REFRESH_TOKEN_SECRET || 'secret', {
    expiresIn: '7d',
  });
}

export function buildError(name: string, message: string) {
  const error = new Error(message);
  error.name = name;
  return error;
}
