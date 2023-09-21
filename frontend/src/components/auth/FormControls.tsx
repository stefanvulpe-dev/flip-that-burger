import { Link } from 'react-router-dom';

export function FormControls({ isSubmitting }: { isSubmitting: boolean }) {
  return (
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
  );
}
