import { ProfileSectionsList, ProfileTitle } from '../components';
import { ProfileControls } from '../layouts';

export function UserProfile() {
  return (
    <div className='w-11/12 max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr_2fr] lg:mt-20'>
      <ProfileTitle />
      <ProfileControls />
      <ProfileSectionsList />
    </div>
  );
}
