import express from 'express';
import { UsersRepository } from '../repositories';

export async function register(req: express.Request, res: express.Response) {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await UsersRepository.getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}
