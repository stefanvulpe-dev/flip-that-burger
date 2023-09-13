import { Form } from 'react-router-dom';

export function EditForm() {
  return (
    <Form
      method='post'
      className='mt-10 md:mt-0 max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto md:grid md:grid-cols-2 md:gap-4 md:items-center'>
      <div className='mb-6 md:mb-0'>
        <label className='inline-block pb-2' htmlFor='first-name'>
          First Name
        </label>
        <input
          type='text'
          id='first-name'
          className='block w-full p-2 rounded border-2 border-neutral-500'
        />
      </div>
      <div className='mb-6 md:mb-0'>
        <label className='inline-block pb-2' htmlFor='last-name'>
          Last Name
        </label>
        <input
          type='text'
          id='last-name'
          className='block w-full p-2 rounded border-2 border-neutral-500'
        />
      </div>
      <div className='mb-6 md:mb-0'>
        <label className='inline-block pb-2' htmlFor='phone'>
          Phone
        </label>
        <input
          type='text'
          id='phone'
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
