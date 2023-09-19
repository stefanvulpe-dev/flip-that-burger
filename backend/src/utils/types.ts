import { Request } from 'express';
import mongoose from 'mongoose';

export type CustomRequest = Request & { userId?: string };
