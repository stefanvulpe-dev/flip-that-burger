import {
  faBagShopping,
  faBurger,
  faEdit,
  faLocation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function UserCard() {
  return (
    <div className='rounded-lg shadow-2xl p-4 grid gap-6'>
      <img
        src='https://i.pravatar.cc/300'
        alt='user-logo'
        className='max-w-[10rem] rounded-full aspect-square justify-self-center'
      />
      <div className='flex gap-2 items-start px-6'>
        <p className='text-neutral-300 text-xs sm:text-sm text-center flex-1'>
          <FontAwesomeIcon
            icon={faLocation}
            className='block mx-auto mb-2 text-xl'
          />
          <span className='block'>Iasi, RO</span>
        </p>
        <p className='text-neutral-300 text-xs sm:text-sm text-center flex-1'>
          <FontAwesomeIcon
            icon={faBagShopping}
            className='block mx-auto mb-2 text-xl'
          />
          <span className='block'>62 orders</span>
        </p>
        <p className='text-neutral-300 text-xs sm:text-sm text-center flex-1'>
          <FontAwesomeIcon
            icon={faBurger}
            className='block mx-auto mb-2 text-xl'
          />
          <span className='block'>4 yr</span>
        </p>
      </div>
      <Link
        to='edit-profile'
        className='block text-accent-400 text-center font-semibold text-sm md:text-base bg-accent-200 py-3 rounded-lg transition-colors hover:bg-accent-300'>
        <FontAwesomeIcon icon={faEdit} className='pr-2' />
        Edit Profile
      </Link>
    </div>
  );
}
