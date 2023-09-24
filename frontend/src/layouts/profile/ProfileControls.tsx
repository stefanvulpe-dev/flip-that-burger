import { UserCard, PromoCode } from '../../components';

export function ProfileControls({
  image,
  location,
  orders,
  membership,
}: {
  image: string;
  location: string;
  orders: number;
  membership: number;
}) {
  return (
    <div className='w-full max-w-sm mx-auto lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-span-2'>
      <UserCard
        image={image}
        location={location}
        membership={membership}
        orders={orders}
      />
      <PromoCode />
    </div>
  );
}
