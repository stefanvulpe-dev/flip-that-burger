import { ProfileSectionsList, ProfileTitle } from '../components';
import { ProfileControls } from '../layouts';
import { User } from '../utils';
import defaultPicture from '../assets/user/default-user.png';

export function UserProfile() {
  const user: User = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '123456789',
    email: 'johndoe@gmail.com',
    image: defaultPicture,
    favouriteRestaurant: 'Iasi, RO',
    orders: [],
  };

  return (
    <div className='w-11/12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_2fr] lg:mt-20'>
      {user && (
        <>
          <ProfileTitle firstName={user.firstName} lastName={user.lastName} />
          <ProfileControls
            image={user.image}
            location={user.favouriteRestaurant}
            orders={user.orders.length}
            membership={4}
          />
          <ProfileSectionsList />
        </>
      )}
    </div>
  );
}
