import { orders } from '../../data/Orders';
import { OrderCard } from './OrderCard';

export function OrdersHistory() {
  return (
    <ul>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </ul>
  );
}
