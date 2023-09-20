import { Response } from 'express';
import { UsersRepository } from '../repositories';
import { CustomRequest } from '../utils';

export async function getInfo(req: CustomRequest, res: Response) {
  try {
    if (!req.userId)
      throw new Error('You must be logged in to get that information.');

    const user = await UsersRepository.getUserById(req.userId);

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
