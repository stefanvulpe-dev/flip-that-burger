import { ProfilePictureControls, ProfilePicture } from '../../components/';

export function ProfilePictureWrapper() {
  return (
    <div className='max-w-sm mx-auto md:max-w-none md:flex md:gap-8 md:justify-center md:items-center'>
      <ProfilePicture />
      <ProfilePictureControls />
    </div>
  );
}
