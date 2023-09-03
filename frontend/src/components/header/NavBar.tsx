import { ForwardedRef, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const NavBar = forwardRef(function (
  _props,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <nav
      ref={ref}
      className='navbar | text-accent-400 text-lg font-semibold text-center bg-accent-100 transition-position ease-in-out duration-700 [&:not(.active)]:-left-full [&:not(.active)]:right-full absolute top-full left-0 right-0 px-4 py-4 xl:static xl:block xl:text-xl xl:self-center xl:justify-self-stretch'>
      <ul className='xl:flex xl:justify-between xl:items-center'>
        {items.map(item => (
          <li key={item.href} className='py-2'>
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
