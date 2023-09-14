import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CartItemCard() {
  return (
    <li className='flex justify-between items-start mb-4 last-of-type:mb-0'>
      <button
        type='button'
        className='text-accent-200 text-xl font-bold bg-gray-200 p-1 rounded-full transition-colors hover:bg-red-300'>
        <FontAwesomeIcon icon={faMinus} className='block aspect-square' />
      </button>
      <p className='text-neutral-300 font-semibold text-sm max-w-[20ch] text-center'>
        1 x Chicken Teriyaki Spicy Burger
      </p>
      <p className='text-neutral-300 font-bold text-sm'>$10.99</p>
    </li>
  );
}
