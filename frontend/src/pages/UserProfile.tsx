import { ProfileSectionsList, ProfileTitle } from '../components';
import { ProfileControls } from '../layouts';
import { RequestConfig, User } from '../utils';
import { useFetch } from '../hooks';

export function UserProfile() {
  const config: RequestConfig = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    url: '/users/profile',
  };
  const user = useFetch<User | null>(config);

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
