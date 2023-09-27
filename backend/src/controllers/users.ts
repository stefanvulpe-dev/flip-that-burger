import { Response } from 'express';
import { UsersRepository } from '../repositories';
import { getFile } from '../services/s3Client';
import { CustomRequest } from '../utils';

export async function getInfo(req: CustomRequest, res: Response) {
  try {
    if (!req.userId)
      throw new Error('You must be logged in to get that information.');

    const user = await UsersRepository.getUserById(req.userId);
    if (!user) throw new Error('User not found');

    const imageUrl = await getFile(user.image);

    res.status(200).json({ ...user.toJSON(), photo: imageUrl });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function getCardDetails(req: CustomRequest, res: Response) {
  try {
    if (!req.userId)
      throw new Error('You must be logged in to get that information.');

    const user = await UsersRepository.getUserById(req.userId);
    if (!user) throw new Error('User not found');

    const imageUrl = await getFile(user.image);

    res.status(200).json({ username: user.username, photo: imageUrl });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
