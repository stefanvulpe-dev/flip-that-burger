import { FormControls, FormGroup } from '.';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema, TLoginSchema } from '../../utils';
import { zodResolver } from '@hookform/resolvers/zod';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = (data: TLoginSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className='py-10 px-6 rounded shadow-2xl w-11/12 max-w-md'>
      <h1 className='text-neutral-300 font-bold text-2xl text-center mb-12'>
        Log into your account
      </h1>
      <form
        className='max-w-sm grid gap-y-4 mx-auto'
        onSubmit={handleSubmit(onSubmit)}>
        <FormGroup<TLoginSchema>
          id='username'
          label='Username'
          type='text'
          register={register}
          error={errors.username}
        />
        <FormGroup<TLoginSchema>
          id='password'
          label='Password'
          type='password'
          register={register}
          error={errors.password}
        />
        <FormControls parentForm='login' isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
