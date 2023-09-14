import { Form, Link } from 'react-router-dom';

export function SignupForm() {
  return (
    <div className='py-8 px-6 rounded shadow-2xl w-11/12 max-w-lg'>
      <h1 className='text-neutral-300 font-bold text-2xl text-center mb-12'>
        Create an account
      </h1>
      <Form method='post' className='max-w-sm mx-auto'>
        <div className='mb-6'>
          <label className='block pb-3' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6'>
          <label className='block pb-3' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6'>
          <label className='block pb-3' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='mb-6'>
          <label className='block pb-3' htmlFor='password'>
            Confirm password
          </label>
          <input
            type='password'
            id='password'
            className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div>
          <label className='block pb-3' htmlFor='photo'>
            Profile picture
          </label>
          <input type='file' name='photo' id='photo' className='hidden' />
          <label
            htmlFor='photo'
            className='relative block w-full px-4 py-2 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300 after:absolute after:content-[url("/src/assets/signup/open-folder.svg")] after:top-1/2 after:-translate-y-1/2 after:right-4'>
            Choose a file
          </label>
        </div>
        <div className='flex gap-4 items-center mt-12'>
          <Link
            to='/flip-that-burger/login'
            className='block w-full text-center bg-accent-200 text-accent-400 rounded py-3 transition-colors hover:bg-accent-300'>
            Log in
          </Link>
          <button
            type='submit'
            className='block w-full bg-accent-200 text-accent-400 rounded py-3 transition-colors hover:bg-accent-300'>
            Register
          </button>
        </div>
      </Form>
    </div>
  );
}
