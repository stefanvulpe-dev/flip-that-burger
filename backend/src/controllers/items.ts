import { Request, Response } from 'express';
import { MenuItemsRepository } from '../repositories';
import { TItem } from '../repositories/MenuItemsRepository';

export async function getNewestItems(req: Request, res: Response) {
  try {
    const category: TItem = req.query.category as TItem;

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
