import { NavBar, PrimaryButton, ProfileCard } from '../../components/index';
import chefLogo from '../../assets/main/icon-chef.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navBarRef = useRef<HTMLElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    navBarRef.current?.classList.toggle('active');
    profileCardRef.current?.classList.toggle('active');
    primaryButtonRef.current?.classList.toggle('active');
    setIsOpen(!isOpen);
  }

  return (
    <header className='bg-accent-100 relative'>
      <FontAwesomeIcon
        icon={isOpen ? faXmark : faBars}
        className='xl:hidden absolute left-10 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-400 font-bold text-3xl'
        onClick={handleToggle}
      />
      <div className='w-11/12 max-w-2xl xl:max-w-6xl py-4 grid gap-6 grid-flow-col xl:grid-cols-3 mx-auto'>
        <NavBar ref={navBarRef} onLinkClick={handleToggle} />
        <div className='justify-self-center w-64 max-w-[80%] flex items-center justify-center sm:justify-between xl:justify-evenly xl:max-w-none xl:w-auto xl:justify-self-auto'>
          <img
            src={chefLogo}
            alt='chef logo'
            className='max-w-[4rem] rounded-full border-[3px] border-accent-200 p-2 bg-accent-100'
          />
          <PrimaryButton text='Online order' ref={primaryButtonRef} />
        </div>
        <ProfileCard ref={profileCardRef} />
      </div>
    </header>
  );
}
