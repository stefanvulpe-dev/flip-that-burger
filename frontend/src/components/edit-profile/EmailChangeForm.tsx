import { Form } from 'react-router-dom';

export function EmailChangeForm() {
  return (
    <Form
      method='post'
      className='mt-10 max-w-md lg:max-w-xl xl:max-w-2xl mx-auto md:grid md:grid-cols-[2fr_1fr] md:gap-4 md:items-center'>
      <div>
        <label htmlFor='email' className='block pb-2'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter new email'
          className='block w-full p-2 rounded border-2 border-neutral-500'
        />
      </div>
      <button
        type='submit'
        className='w-full mt-6 md:mt-0 text-accent-400 bg-accent-200 px-6 py-3 rounded transition-colors hover:bg-accent-300 md:self-end'>
        Confirm
      </button>
    </Form>
  );
}
