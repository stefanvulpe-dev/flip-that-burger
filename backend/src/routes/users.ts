import { Router } from 'express';
import { UsersController } from '../controllers';

export const usersRouter = Router();

usersRouter.get('/profile', UsersController.getInfo);
