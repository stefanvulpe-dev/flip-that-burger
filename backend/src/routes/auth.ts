import { Router } from 'express';
import { AuthController } from '../controllers';

export const authRouter = Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.post('/refresh-tokens', AuthController.refreshTokens);
authRouter.delete('/logout', AuthController.logout);
