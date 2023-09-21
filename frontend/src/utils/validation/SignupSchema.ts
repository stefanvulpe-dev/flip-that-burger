import { z } from 'zod';

export const SignUpSchema = z
  .object({
    firstName: z.string().nonempty({ message: 'First name cannot be empty' }),
    lastName: z.string().nonempty({ message: 'Last name cannot be empty' }),
    email: z.string().email({
      message: 'Invalid email',
    }),
    username: z
      .string()
      .regex(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[._][a-zA-Z0-9]+)?$/i, {
        message:
          'Username must be between 8 to 18 characters long and can only contain letters, numbers, one underscore or one dot',
      }),
    password: z
      .string({
        required_error: 'This field is required',
      })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
        {
          message:
            'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
        },
      ),
    confirmPassword: z
      .string({
        required_error: 'This field is required',
      })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/,
        {
          message:
            'Password must be between 8 to 32 characters long and contain at least one number, one lowercase letter, one uppercase letter and one special character',
        },
      ),
    photo: z.instanceof(File, {
      message: 'Please upload a valid photo, .jpg, .jpeg, .png',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
