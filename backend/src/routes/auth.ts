import { Router } from 'express';
import multer from 'multer';
import { AuthController } from '../controllers';

export const authRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

authRouter.post('/register', upload.single('photo'), AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.post('/refresh-tokens', AuthController.refreshTokens);
authRouter.delete('/logout', AuthController.logout);
