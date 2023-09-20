import { Router } from 'express';
import { OrdersController } from '../controllers';

export const ordersRouter = Router();

ordersRouter.post('', OrdersController.postCreateOrder);
