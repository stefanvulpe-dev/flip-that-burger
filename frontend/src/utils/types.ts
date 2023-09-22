import { FieldError, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { LoginSchema, SignUpSchema } from '.';

export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export type TLoginSchema = z.infer<typeof LoginSchema>;

export type FormGroupProps = {
  id: keyof TSignUpSchema | keyof TLoginSchema;
  label: string;
  type: 'text' | 'password' | 'email';
  error: FieldError | undefined;
  register: UseFormRegister<TSignUpSchema> | UseFormRegister<TLoginSchema>;
};
