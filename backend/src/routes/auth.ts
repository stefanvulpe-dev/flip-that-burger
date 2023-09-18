import { Router } from 'express';
import { login, logout, refreshTokens, register } from '../controllers';

export const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/refresh-tokens', refreshTokens);
authRouter.delete('/logout', logout);
