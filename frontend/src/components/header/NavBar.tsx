import { ForwardedRef, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const items = [
  { label: 'Home', href: '/flip-that-burger/' },
  { label: 'Menu', href: '/flip-that-burger/menu' },
  { label: 'About', href: '/flip-that-burger/about' },
  { label: 'Contact', href: '/flip-that-burger/contact' },
];

export const NavBar = forwardRef(function (
  _props,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <nav
      ref={ref}
      className='text-accent-400 text-lg font-semibold text-center bg-accent-100 transition-position ease-in-out duration-700 [&:not(.active)]:-left-full [&:not(.active)]:right-full absolute top-[calc(100%-1px)] left-0 right-0 py-4 xl:static xl:block xl:text-xl xl:self-center xl:justify-self-stretch'>
      <ul className='xl:flex xl:justify-between xl:items-center'>
        {items.map(item => (
          <li key={item.href} className='py-4'>
            <NavLink
              to={item.href}
              className='transition-colors border-b-2 border-accent-100 hover:border-b-2 hover:border-accent-400'>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});
