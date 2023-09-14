import { useWindowSize } from '@uidotdev/usehooks';
import { useRef } from 'react';
import { CartCard, ModalButton, ModalCart, PageHeader } from '../components';
import { MenuSectionsControls } from '../layouts/online-order/MenuSectionsControls';

export function OnlineOrder() {
  const size = useWindowSize();
  const modalRef = useRef<HTMLDialogElement>(null);

  function toggleModal() {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  return (
    <div className='w-11/12 max-w-6xl mt-10 md:mt-16 mx-auto grid gap-6 md:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_3fr_2fr] md:gap-y-16'>
      <PageHeader />
      <MenuSectionsControls />
      <CartCard />
      {size.width! < 1280 && (
        <>
          <ModalCart ref={modalRef} />
          <ModalButton onClick={toggleModal} />
        </>
      )}
    </div>
  );
}
