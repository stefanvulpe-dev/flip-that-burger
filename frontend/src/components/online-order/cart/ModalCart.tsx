import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ForwardedRef, MutableRefObject, forwardRef } from 'react';
import { OrderSummary } from './OrderSummary';

export const ModalCart = forwardRef(function (
  _props,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  return (
    <dialog ref={ref} className='w-11/12 max-w-md p-4 md:px-6 rounded'>
      <button
        className='block text-neutral-300 text-3xl ml-auto pb-8'
        onClick={() => {
          const modalRef = ref as MutableRefObject<HTMLDialogElement> | null;
          if (modalRef) {
            modalRef.current.close();
          }
        }}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <OrderSummary />
      <button
        type='button'
        className='block mx-auto text-accent-400 bg-accent-200 px-10 py-2 my-4 rounded-full transition-colors hover:bg-accent-300'>
        Order now
      </button>
    </dialog>
  );
});
