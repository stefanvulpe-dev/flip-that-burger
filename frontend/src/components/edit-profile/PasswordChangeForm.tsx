import { Form } from 'react-router-dom';

export function PasswordChangeForm() {
  return (
    <Form
      method='post'
      className='mt-10 max-w-sm mx-auto md:grid md:gap-6 md:items-center'>
      <div className='mb-6 md:mb-0'>
        <label className='inline-block pb-2' htmlFor='new-password'>
          New password
        </label>
        <input
          type='password'
          id='new-password'
          placeholder='Enter new password'
          className='block w-full p-2 rounded border-2 border-neutral-500'
        />
      </div>
      <div className='mb-6 md:mb-0'>
        <label className='inline-block pb-2' htmlFor='confirm-new-password'>
          New password confirmation
        </label>
        <input
          type='password'
          id='confirm-new-password'
          placeholder='Confirm new password'
          className='block w-full p-2 rounded border-2 border-neutral-500'
        />
      </div>
      <button
        type='submit'
        className='w-full text-accent-400 bg-accent-200 px-6 py-3 rounded transition-colors hover:bg-accent-300 md:self-end'>
        Submit
      </button>
    </Form>
  );
}
