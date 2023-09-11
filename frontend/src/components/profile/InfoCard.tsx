import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight,
  faCreditCard,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function InfoCard() {
  return (
    <div className='rounded-lg shadow-2xl p-4'>
      <div className='mt-4'>
        <p className='text-neutral-500 pb-2'>Name</p>
        <p>John Doe</p>
      </div>
      <div className='mt-6 pb-6 border-b border-neutral-600'>
        <p className='text-neutral-500 pb-2'>Email</p>
        <p>johndoe@gmail.com</p>
      </div>
      <div className='mt-6 pb-6 border-b border-neutral-600'>
        <p className='text-neutral-500 pb-2'>Phone</p>
        <p>+35 765 444 9091</p>
      </div>
      <div className='my-6'>
        <p className='text-neutral-500 pb-2'>Payment methods</p>
        <div className='flex justify-between items-center rounded border-neutral-500 border-2 py-2 px-4 mt-4 cursor-pointer transition-colors hover:border-accent-200'>
          <div className='flex gap-4 items-center'>
            <FontAwesomeIcon icon={faCcVisa} className='text-2xl md:text-3xl' />
            <span>**** **** **** 1234</span>
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            className='text-xl text-accent-200'
          />
        </div>
        <div className='flex justify-between items-center rounded border-neutral-500 border-2 py-2 px-4 mt-4 cursor-pointer transition-opacity hover:opacity-70'>
          <div className='flex gap-4 items-center'>
            <FontAwesomeIcon
              icon={faCreditCard}
              className='text-2xl md:text-3xl'
            />
            <span>Add new card</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} className='text-xl' />
        </div>
      </div>
    </div>
  );
}
