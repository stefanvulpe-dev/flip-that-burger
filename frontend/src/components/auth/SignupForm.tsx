import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormControls, FormGroup, PictureUpload } from '.';
import { SignUpSchema, TSignUpSchema } from '../../utils';

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className='py-8 px-6 rounded shadow-2xl w-11/12 max-w-md md:max-w-4xl'>
      <h1 className='text-neutral-300 font-bold text-2xl md:text-3xl text-center mb-12'>
        Create an account
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method='post'
        className='w-full md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-8 md:items-start'>
        <FormGroup
          id='firstName'
          label='First name'
          type='text'
          error={errors.firstName}
          register={register}
        />
        <FormGroup
          id='lastName'
          label='Last name'
          type='text'
          error={errors.lastName}
          register={register}
        />
        <FormGroup
          id='email'
          label='Email'
          type='email'
          error={errors.email}
          register={register}
        />
        <FormGroup
          id='username'
          label='Username'
          type='text'
          error={errors.username}
          register={register}
        />
        <FormGroup
          id='password'
          label='Password'
          type='password'
          error={errors.password}
          register={register}
        />
        <FormGroup
          id='confirmPassword'
          label='Confirm password'
          type='password'
          error={errors.confirmPassword}
          register={register}
        />
        <PictureUpload register={register} error={errors.photo} />
        <FormControls isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
