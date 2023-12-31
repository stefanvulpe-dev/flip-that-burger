import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { LoginSchema, SignUpSchema } from '.';

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export type TLoginSchema = z.infer<typeof LoginSchema>;

export type FormGroupProps<T extends FieldValues> = {
  id: keyof T;
  label: string;
  type: 'text' | 'password' | 'email';
  error: FieldError | undefined;
  register: UseFormRegister<T>;
};

export type RequestConfig = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers: Record<string, string>;
  data?: Record<string, unknown>;
  params?: URLSearchParams;
};

export type OrderItem = {
  item: string;
  quantity: number;
};

export type Order = {
  items: OrderItem[];
  total: number;
  timestamps: {
    createdAt: Date;
  };
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  phone: string;
  favouriteRestaurant: string;
  orders: Order[];
};
