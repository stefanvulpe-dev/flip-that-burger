import { Form, Link } from 'react-router-dom';

export function LoginForm() {
  return (
    <div className='py-10 px-6 rounded shadow-2xl w-11/12 max-w-md'>
      <h1 className='text-neutral-300 font-bold text-2xl text-center mb-12'>
        Log into your account
      </h1>
      <Form method='post' className='max-w-sm mx-auto'>
        <div className='mb-6'>
          <label className='block pb-3' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='block w-full px-4 py-2 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div>
          <label className='block pb-3' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='block w-full px-4 py-2 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
          />
        </div>
        <div className='flex gap-4 items-center mt-12'>
          <button
            type='submit'
            className='block w-full bg-accent-200 text-accent-400 rounded py-3 transition-colors hover:bg-accent-300'>
            Login
          </button>
          <Link
            to='/flip-that-burger/register'
            className='block w-full text-center bg-accent-200 text-accent-400 rounded py-3 transition-colors hover:bg-accent-300'>
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}
