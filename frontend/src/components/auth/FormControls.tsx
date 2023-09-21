import { Link } from 'react-router-dom';

export function FormControls({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <div>
      <p className='text-neutral-300 text-center invisible pb-2'>
        Form controls
      </p>
      <div className='flex gap-4 items-center'>
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
    </div>
  );
}
