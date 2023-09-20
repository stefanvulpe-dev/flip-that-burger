import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { AuthController } from './controllers';
import { authRouter, itemsRouter, ordersRouter, usersRouter } from './routes';

const app = express();

app.use(
  cors({
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

app.use('/auth', authRouter);
app.use('/items', itemsRouter);
app.use('/orders', AuthController.checkAuth, ordersRouter);
app.use('/users', AuthController.checkAuth, usersRouter);
app.use('*', (_req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});

const MONGO_URI = process.env.MONGO_URI || '';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error', (err: Error) => {
  console.error(err);
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});
