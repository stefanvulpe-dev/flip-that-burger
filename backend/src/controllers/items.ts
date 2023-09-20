import { Request, Response } from 'express';
import { Category } from '../models';
import { MenuItemsRepository } from '../repositories';

export async function getNewestItems(req: Request, res: Response) {
  try {
    const category: Category = req.query.category as Category;

    if (!category) {
      throw new Error('Category query param is required');
    }

    const items = await MenuItemsRepository.getNewest(category);

    res.status(200).json(items);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}

export async function getAllItems(req: Request, res: Response) {
  try {
    const category: Category = req.query.category as Category;

    if (!category) {
      throw new Error('Category query param is required');
    }

    const items = await MenuItemsRepository.geCategorys(category);

    res.status(200).json(items);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}
