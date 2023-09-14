import { CartItemCard } from './CartItemCard';

export function OrderSummary() {
  return (
    <>
      <ul className='xl:w-full xl:mr-auto max-h-80 scroll-container'>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </ul>
      <p className='text-neutal-300 font-bold text-center text-xl py-4 xl:py-0'>
        Total: $80.72
      </p>
    </>
  );
}
