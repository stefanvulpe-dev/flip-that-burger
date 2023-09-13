import {
  faClock,
  faThumbsUp,
  faTruckRampBox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PageHeaderList() {
  return (
    <ul className='text-neutral-300 text-lg flex justify-center items-center flex-row gap-6'>
      <li className='w-full max-w-[5rem]'>
        <p className='text-sm sm:text-base text-center'>
          <FontAwesomeIcon icon={faTruckRampBox} className='pr-2' />
          <span>$3.99</span>
        </p>
      </li>
      <li className='w-full max-w-[5rem]'>
        <p className='text-sm sm:text-base text-center'>
          <FontAwesomeIcon icon={faClock} className='pr-2' />
          <span>45min</span>
        </p>
      </li>
      <li className='w-full max-w-[5rem]'>
        <p className='text-sm sm:text-base text-center'>
          <FontAwesomeIcon icon={faThumbsUp} className='pr-2' />
          <span>95%</span>
        </p>
      </li>
    </ul>
  );
}
