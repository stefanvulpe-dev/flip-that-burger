import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-router-dom';

export function SearchBar() {
  return (
    <Form method='post' className='md:col-start-2 md:col-end-3'>
      <label htmlFor='search' className='hidden'>
        Search in Flip that burger
      </label>
      <div className='flex items-center'>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Search in Flip that burger'
          className='w-full rounded-l-full shadow-2xl py-4 px-6 border-2 border-accent-400 focus:outline-none focus:border-accent-300'
        />
        <button
          type='submit'
          className='block rounded-r-full shadow-inner bg-accent-400 p-4 border-2 border-accent-400'>
          <FontAwesomeIcon
            icon={faSearch}
            className='text-neutral-300 text-xl'
          />
        </button>
      </div>
    </Form>
  );
}
