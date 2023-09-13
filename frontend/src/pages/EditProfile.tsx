import { useState } from 'react';
import {
  EditForm,
  EditProfileNav,
  ProfileSection,
  EmailChangeForm,
  PasswordChangeForm,
} from '../components';
import { ProfilePictureWrapper } from '../layouts/edit-profile/ProfilePictureWrapper';

export function EditProfile() {
  const [activeSection, setActiveSection] = useState('public');

  let renderdItem: JSX.Element = <></>;

  function handleLinkClick(sectionName: string) {
    setActiveSection(sectionName);
  }

  switch (activeSection) {
    case 'public':
      renderdItem = (
        <ProfileSection title='Public info'>
          <ProfilePictureWrapper />
          <EditForm />
        </ProfileSection>
      );
      break;
    case 'email':
      renderdItem = (
        <ProfileSection title='Change your email'>
          <EmailChangeForm />
        </ProfileSection>
      );
      break;
    case 'password':
      renderdItem = (
        <ProfileSection title='Change your password'>
          <PasswordChangeForm />
        </ProfileSection>
      );
      break;
  }

  return (
    <div className='w-11/12 max-w-6xl mx-auto mt-10 md:grid md:gap-2 md:grid-cols-[1fr_2fr] md:mt-20'>
      <EditProfileNav
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />
      {renderdItem}
    </div>
  );
}
