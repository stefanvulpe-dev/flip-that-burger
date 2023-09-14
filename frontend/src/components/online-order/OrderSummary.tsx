import { CartItemCard } from './CartItemCard';

export function OrderSummary() {
  return (
    <>
      <ul className='w-full mr-auto my-8 max-h-80 scroll-container'>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </ul>
      <p className='text-neutal-300 font-bold text-center text-xl py-4'>
        Total: $80.72
      </p>
    </>
  );
}
