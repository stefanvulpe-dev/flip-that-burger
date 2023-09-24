import { Request } from 'express';
import { z } from 'zod';

export type CustomRequest = Request & { userId?: string };

export const UserRegisterSchema = z.object({
  firstName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
  lastName: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string',
  }),
  favouriteRestaurant: z.string({
    required_error: 'Favourite restaurant is required',
  }),
  phone: z
    .string({
      required_error: 'Phone number is required',
    })
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
      message: 'Invalid phone number',
    }),
  email: z.string().email({
    message: 'Invalid email',
  }),
  username: z.string().regex(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[._][a-zA-Z0-9]+)?$/i, {
    message:
      'Username must be between 8 to 18 characters long and can only contain letters, numbers, underscores and dots',
  }),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
      {
        message:
          'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
      },
    ),
});

export const UserLoginSchema = z.object({
  username: z.string().regex(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[._][a-zA-Z0-9]+)?$/i, {
    message:
      'Username must be between 8 to 18 characters long and can only contain letters, numbers, underscores and dots',
  }),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
      {
        message:
          'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
      },
    ),
});
