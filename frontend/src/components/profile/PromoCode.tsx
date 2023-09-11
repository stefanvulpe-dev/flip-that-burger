import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-router-dom';

export function PromoCode() {
  return (
    <div className='px-4 py-8 mt-10 rounded-lg shadow-2xl'>
      <h2 className='text-neutral-300 font-bold text-lg text-center pb-4'>
        <FontAwesomeIcon icon={faGift} className='pr-2' />
        Enter a gift code
      </h2>
      <Form method='post' className='flex justify-between gap-2'>
        <label htmlFor='#code' className='hidden'>
          Redeem your gift code
        </label>
        <input
          type='text'
          id='code'
          name='code'
          className='block rounded border-2 border-neutral-500 outline-none w-3/4 px-2 py-1 text-center focus:border-accent-300'
          placeholder='e.g. Xy3h#k'
        />
        <button
          type='submit'
          className='block w-1/4 text-accent-400 font-semibold bg-accent-200 rounded transition-colors hover:bg-accent-300'>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Form>
    </div>
  );
}
