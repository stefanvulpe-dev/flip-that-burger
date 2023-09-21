import { z } from 'zod';

export const SignUpSchema = z
  .object({
    firstName: z.string({
      required_error: 'First name is required',
      invalid_type_error: 'First name must be a string',
    }),
    lastName: z.string({
      required_error: 'Last name is required',
      invalid_type_error: 'Last name must be a string',
    }),
    email: z.string().email({
      message: 'Invalid email',
    }),
    username: z
      .string()
      .regex(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[._][a-zA-Z0-9]+)?$/i, {
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
    confirmPassword: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
        {
          message:
            'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
        },
      ),
    photo: z.any(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
