import { Request } from 'express';

export type CustomRequest = Request & { userId?: string };
