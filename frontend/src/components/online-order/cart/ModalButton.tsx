import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ModalButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className='xl:hidden md:col-span-2 justify-self-center w-full max-w-xs sticky bottom-4 bg-accent-200 text-accent-400 font-semibold py-3 md:py-4 rounded-full shadow-3xl transition-colors hover:bg-accent-300'>
      <FontAwesomeIcon icon={faShoppingCart} className='pr-3' />
      Cart (3)
    </button>
  );
}
