import { FieldError, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { SignUpSchema } from '.';

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export type FormGroupProps = {
  id: keyof TSignUpSchema;
  label: string;
  type: 'text' | 'password' | 'email';
  error: FieldError | undefined;
  register: UseFormRegister<TSignUpSchema>;
};
