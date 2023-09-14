import { ReactElement } from 'react';
import {
  EditForm,
  ProfileSection,
  EmailChangeForm,
  PasswordChangeForm,
} from '../components';
import { ProfilePictureWrapper } from '../layouts/edit-profile/ProfilePictureWrapper';

export function ProfileSectionReducer(
  state: {
    element: ReactElement;
    activeSection: string;
  },
  action: { type: string },
) {
  switch (action.type) {
    case 'public':
      return {
        element: (
          <ProfileSection title='Public info'>
            <ProfilePictureWrapper />
            <EditForm />
          </ProfileSection>
        ),
        activeSection: 'public',
      };
    case 'email':
      return {
        element: (
          <ProfileSection title='Change your email'>
            <EmailChangeForm />
          </ProfileSection>
        ),
        activeSection: 'email',
      };
    case 'password':
      return {
        element: (
          <ProfileSection title='Change your password'>
            <PasswordChangeForm />
          </ProfileSection>
        ),
        activeSection: 'password',
      };
    default:
      return state;
  }
}
