import { useReducer } from 'react';
import { EditForm, EditProfileNav, ProfileSection } from '../components';
import { ProfilePictureWrapper } from '../layouts';
import { ProfileSectionReducer } from '../utils';

export function EditProfile() {
  const [state, dispatch] = useReducer(ProfileSectionReducer, {
    element: (
      <ProfileSection title='Public info'>
        <ProfilePictureWrapper />
        <EditForm />
      </ProfileSection>
    ),
    activeSection: 'public',
  });

  function handleLinkClick(sectionName: string) {
    dispatch({ type: sectionName });
  }

  return (
    <div className='w-11/12 max-w-6xl mx-auto mt-10 md:grid md:gap-2 md:grid-cols-[1fr_2fr] md:mt-20'>
      <EditProfileNav
        activeSection={state.activeSection}
        onLinkClick={handleLinkClick}
      />
      {state.element}
    </div>
  );
}
