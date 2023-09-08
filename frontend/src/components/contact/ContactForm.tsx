import { Form } from 'react-router-dom';

export function ContactForm() {
  return (
    <Form method='post'>
      <div className='mt-10'>
        <label className='block pb-4 text-neutral-300' htmlFor='name'>
          Your name
        </label>
        <input
          type='text'
          id='name'
          className='border-2 border-neutral-500 rounded block w-full p-2 text-neutral-300'
        />
      </div>
      <div className='mt-10'>
        <label className='block pb-4 text-neutral-300' htmlFor='email'>
          Your email
        </label>
        <input
          type='email'
          id='email'
          className='border-2 border-neutral-500 rounded block w-full p-2 text-neutral-300'
        />
      </div>
      <div className='mt-10'>
        <label className='block pb-4 text-neutral-300' htmlFor='subject'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          className='border-2 border-neutral-500 rounded block w-full p-2 text-neutral-300'
        />
      </div>
      <div className='mt-10'>
        <label className='block pb-4 text-neutral-300' htmlFor='message'>
          Your message
        </label>
        <textarea
          id='message'
          className='border-2 border-neutral-500 rounded block w-full p-2 h-40 resize-none'
        />
      </div>
      <button
        className='mt-10 ml-auto block w-full text-accent-400 font-semibold bg-accent-200 py-3 rounded transition-colors hover:bg-accent-300'
        type='submit'>
        Send
      </button>
    </Form>
  );
}
