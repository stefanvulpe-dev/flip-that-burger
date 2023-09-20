import { Router } from 'express';
import { ItemsController } from '../controllers';

export const itemsRouter = Router();

itemsRouter.get('/newest', ItemsController.getNewestItems);
