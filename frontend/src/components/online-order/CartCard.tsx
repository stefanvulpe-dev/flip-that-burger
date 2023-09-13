import { OrderSummary } from './ORderSummary';

export function CartCard() {
  return (
    <section className='hidden sticky top-4 xl:flex flex-col justify-between items-center xl:col-start-3 xl:row-start-1 xl:row-span-3 xl:self-start min-h-[20rem] p-6 bg-accent-400 shadow-2xl rounded'>
      <h2 className='text-neutral-300 text-2xl font-bold text-center'>
        Your order
      </h2>
      <OrderSummary />
      <button
        type='button'
        className='text-accent-400 bg-accent-200 px-8 py-2 rounded-full transition-colors hover:bg-accent-300'>
        Order now
      </button>
    </section>
  );
}
