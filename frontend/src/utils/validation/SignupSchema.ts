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
    firstName: z
      .string({
        invalid_type_error: 'Invalid type',
      })
      .nonempty({
        message: 'This field is required',
      }),
    lastName: z
      .string({
        invalid_type_error: 'Invalid type',
      })
      .nonempty({
        message: 'This field is required',
      }),
    favouriteRestaurant: z
      .string({
        invalid_type_error: 'Invalid type',
      })
      .nonempty({
        message: 'This field is required',
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
      .instanceof(File, {
        message: 'Please upload an image file',
      })
      .refine(file => isValidMimeType(file), {
        message: 'Invalid file type. Accepted file types are jpg, jpeg and png',
      })
      .refine(file => isValidFileSize(file), {
        message: 'File size must be less than 5MB',
      }),
  })
  .required()
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
