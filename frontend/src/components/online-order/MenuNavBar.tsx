import { NavButton } from './NavButton';

export function MenuNavBar({
  activeSection,
  onLinkClick,
}: {
  activeSection: string;
  onLinkClick: (section: string) => void;
}) {
  return (
    <nav className='md:row-start-2 md:row-span-2'>
      <ul className=''>
        <li className='pb-4'>
          <NavButton
            label='Top sellers'
            activeSection={activeSection}
            onClick={() => onLinkClick('Top sellers')}
          />
        </li>
        <li className='pb-4'>
          <NavButton
            label='Burgers'
            activeSection={activeSection}
            onClick={() => onLinkClick('Burgers')}
          />
        </li>
        <li className='pb-4'>
          <NavButton
            label='Pizzas'
            activeSection={activeSection}
            onClick={() => onLinkClick('Pizzas')}
          />
        </li>
        <li className='pb-4'>
          <NavButton
            label='Chicken'
            activeSection={activeSection}
            onClick={() => onLinkClick('Chicken')}
          />
        </li>
        <li className='pb-4'>
          <NavButton
            label='Beverages'
            activeSection={activeSection}
            onClick={() => onLinkClick('Beverages')}
          />
        </li>
        <li className='pb-4'>
          <NavButton
            label='Coffee'
            activeSection={activeSection}
            onClick={() => onLinkClick('Coffee')}
          />
        </li>
      </ul>
    </nav>
  );
}
