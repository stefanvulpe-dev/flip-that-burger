import { UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { SignUpSchema } from '.';

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export type FormGroupProps = {
  id: string;
  label: string;
  type: 'text' | 'password' | 'email';
  register: UseFormRegister<TSignUpSchema>;
};
