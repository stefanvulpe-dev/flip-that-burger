import { Order } from '../../data/Orders';

export function OrderCard({ order }: { order: Order }) {
  return (
    <li className='rounded-lg shadow-2xl px-6 py-6 mt-10 first-of-type:mt-0'>
      <h3 className='text-center text-neutral-300 font-bold lg:text-lg lg:text-start'>
        Order {order.date}
      </h3>
      <p className='text-neutral-300 text-sm lg:text-base text-center py-8 lg:text-start'>
        {order.items.join(', ')}
      </p>
      <div className='flex justify-between items-center'>
        <p className='text-neutral-300 font-semibold text-lg lg:text-xl'>
          $ {order.total}
        </p>
        <button
          type='button'
          className='text-accent-400 font-semibold text-sm bg-accent-200 px-4 py-2 rounded transition-colors hover:bg-accent-300 lg:text-base'>
          Reorder
        </button>
      </div>
    </li>
  );
}
