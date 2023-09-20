import { Response } from 'express';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { OrdersRepository, UsersRepository } from '../repositories';
import { CustomRequest } from '../utils';

export async function postCreateOrder(req: CustomRequest, res: Response) {
  try {
    if (!req.userId)
      throw new Error('You need to be logged in to create an order');

    const OrderSchema = z.object({
      items: z.array(
        z.object({
          item: z.string(),
          quantity: z.number().positive(),
        }),
      ),
      total: z.number().positive(),
    });

    const order = OrderSchema.parse(req.body);

    const newOrder = await OrdersRepository.createOrder({
      user: req.userId,
      ...order,
    });

    await UsersRepository.addOrder(req.userId, newOrder.id);

    return res.status(201).json(newOrder);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationErrors = fromZodError(error);
      return res.status(400).json({ message: validationErrors.message });
    } else if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
