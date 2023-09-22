import { Router } from 'express';
import multer from 'multer';
import { AuthController } from '../controllers';

export const authRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

authRouter.get('/refresh-tokens', AuthController.refreshTokens);
authRouter.post('/register', upload.single('photo'), AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.delete('/logout', AuthController.logout);
