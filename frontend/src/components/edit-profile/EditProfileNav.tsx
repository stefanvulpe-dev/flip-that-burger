import { faEllipsis, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useWindowWidth } from '../../hooks';

export function EditProfileNav({
  activeSection,
  onLinkClick,
}: {
  activeSection: string;
  onLinkClick: (sectionName: string) => void;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const width = useWindowWidth();

  const navLinks = (
    <ul>
      <li className='lg:text-lg'>
        <button
          className={`border-b-2 ${
            width === 1
              ? activeSection === 'public'
                ? 'border-accent-400 m-4'
                : 'border-accent-100 hover:border-accent-400 m-4'
              : activeSection === 'public'
              ? 'border-neutral-300 my-4 mx-0'
              : 'border-accent-400 hover:border-neutral-300 my-4 mx-0`'
          }`}
          onClick={() => {
            setIsNavOpen(false);
            onLinkClick('public');
          }}>
          Public info
        </button>
      </li>
      <li className='lg:text-lg'>
        <button
          className={`border-b-2 ${
            width === 1
              ? activeSection === 'email'
                ? 'border-accent-400 m-4'
                : 'border-accent-100 hover:border-accent-400 m-4'
              : activeSection === 'email'
              ? 'border-neutral-300 my-4 mx-0'
              : 'border-accent-400 hover:border-neutral-300 my-4 mx-0`'
          }`}
          onClick={() => {
            setIsNavOpen(false);
            onLinkClick('email');
          }}>
          Email change
        </button>
      </li>
      <li className='lg:text-lg'>
        <button
          className={`border-b-2 ${
            width === 1
              ? activeSection === 'password'
                ? 'border-accent-400 m-4'
                : 'border-accent-100 hover:border-accent-400 m-4'
              : activeSection === 'password'
              ? 'border-neutral-300 my-4 mx-0'
              : 'border-accent-400 hover:border-neutral-300 my-4 mx-0`'
          }`}
          onClick={() => {
            setIsNavOpen(false);
            onLinkClick('password');
          }}>
          Password change
        </button>
      </li>
    </ul>
  );

  return (
    <div className='relative max-w-xs md:max-w-none mx-auto md:mx-0 mb-10 md:mb-0 md:self-stretch md:justify-self-stretch md:border-r-2 md:border-neutral-600'>
      {isNavOpen ? (
        <button className='md:hidden absolute left-0 top-1'>
          <FontAwesomeIcon
            icon={faSquareXmark}
            className='text-3xl'
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </button>
      ) : (
        <button className='md:hidden absolute left-0 top-1'>
          <FontAwesomeIcon
            icon={faEllipsis}
            className='text-3xl'
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </button>
      )}
      <h1 className='text-neutral-300 text-3xl font-bold text-center md:text-start lg:text-4xl mb-6'>
        Settings
      </h1>
      {isNavOpen ? (
        <nav className='absolute left-0 top-full right-0 bg-accent-100 text-accent-400 font-semibold text-center rounded'>
          {navLinks}
        </nav>
      ) : (
        <nav className='hidden md:block text-neutral-300 text-start font-semibold'>
          {navLinks}
        </nav>
      )}
    </div>
  );
}
