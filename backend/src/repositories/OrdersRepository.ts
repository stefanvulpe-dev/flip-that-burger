import { OrderModel } from '../models';

export function createOrder(order: Record<string, unknown>) {
  return OrderModel.create(order);
}

export function findOrdersByUserId(userId: string) {
  return OrderModel.find({ user: userId });
}
