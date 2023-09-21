import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SignUpSchema, TSignUpSchema } from '../../utils';

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className='py-8 px-6 rounded shadow-2xl w-11/12 max-w-md md:max-w-4xl'>
      <h1 className='text-neutral-300 font-bold text-2xl text-center mb-12'>
        Create an account
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method='post'
        className='w-full md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-8 md:items-center'>
        <div className='mb-6 md:mb-0'>
          <label className='block pb-3' htmlFor='firstName'>
            First name
          </label>
          <input
            {...register('firstName')}
            type='text'
            id='firstName'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6 md:mb-0'>
          <label className='block pb-3' htmlFor='lastName'>
            Last name
          </label>
          <input
            {...register('lastName')}
            type='text'
            id='lastName'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6 md:mb-0'>
          <label className='block pb-3' htmlFor='email'>
            Email
          </label>
          <input
            {...register('email')}
            type='email'
            id='email'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6 md:mb-0'>
          <label className='block pb-3' htmlFor='username'>
            Username
          </label>
          <input
            {...register('username')}
            type='text'
            id='username'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6 md:mb-0'>
          <label className='block pb-3' htmlFor='password'>
            Password
          </label>
          <input
            {...register('password')}
            type='password'
            id='password'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6 md:mb-0'>
          <label className='block pb-3' htmlFor='confirmPassword'>
            Confirm password
          </label>
          <input
            {...register('confirmPassword')}
            type='password'
            id='confirmPassword'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div>
          <label className='block pb-3' htmlFor='photo'>
            Profile picture
          </label>
          <input
            {...register('photo')}
            type='file'
            name='photo'
            id='photo'
            className='hidden'
          />
          <label
            htmlFor='photo'
            className='relative block w-full px-4 py-2 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300 cursor-pointer after:absolute after:content-[url("/src/assets/signup/open-folder.svg")] after:top-1/2 after:-translate-y-1/2 after:right-4'>
            Choose a file
          </label>
        </div>
        <div className='flex gap-4 items-center mt-12 md:mt-auto'>
          <Link
            to='/flip-that-burger/login'
            className='block w-full text-center bg-accent-200 text-accent-400 rounded py-3 transition-colors hover:bg-accent-300'>
            Log in
          </Link>
          <button
            disabled={isSubmitting}
            type='submit'
            className='block w-full bg-accent-200 text-accent-400 rounded py-3 transition-colors hover:bg-accent-300 disabled:bg-neutral-500'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
