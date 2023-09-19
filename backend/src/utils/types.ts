import { Request } from 'express';
import mongoose from 'mongoose';

export type CustomRequest = Request & { userId?: string };

export type MenuItem = {
  id: mongoose.Schema.Types.ObjectId;
  type: string;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  new?: boolean;
  topSeller?: boolean;
};
