import { z } from 'zod';

const isValidMimeType = (file: File): boolean => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  return allowedMimeTypes.includes(file.type);
};

const isValidFileSize = (file: File): boolean => {
  const maxSizeBytes = 5 * 1024 * 1024; // 5MB
  return file.size <= maxSizeBytes;
};

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
    photo: z
      .custom(value => {
        return new Promise((resolve, reject) => {
          if (value instanceof File) {
            if (!isValidMimeType(value)) {
              reject('Invalid file type. Only jpg, png, and jpeg are allowed.');
            }
            if (!isValidFileSize(value)) {
              reject('File size exceeds 5MB.');
            }
            resolve(value);
          } else {
            reject('Invalid file.');
          }
        });
      })
      .optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
