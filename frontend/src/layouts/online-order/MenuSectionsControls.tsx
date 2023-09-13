import {
  faBurger,
  faCoffee,
  faEgg,
  faGlassWaterDroplet,
  faPizzaSlice,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import {
  beverages,
  chickenItems,
  coffees,
  menuItems,
  pizzas,
} from '../../data/MenuItems';
import {
  MenuNavBar,
  MenuSection,
  SearchBar,
  SectionSlider,
} from '../../components';
import { useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

export function MenuSectionsControls() {
  const [activeSection, setActiveSection] = useState('Top sellers');
  const size = useWindowSize();

  let renderedSection: JSX.Element = <></>;

  function changeActiveSection(section: string) {
    setActiveSection(section);
  }

  switch (activeSection) {
    case 'Top sellers':
      renderedSection = (
        <MenuSection title='Top sellers' logo={faTrophy} items={menuItems} />
      );
      break;
    case 'Burgers':
      renderedSection = (
        <MenuSection title='Burgers' logo={faBurger} items={menuItems} />
      );
      break;
    case 'Pizzas':
      renderedSection = (
        <MenuSection title='Pizzas' logo={faPizzaSlice} items={pizzas} />
      );
      break;
    case 'Chicken':
      renderedSection = (
        <MenuSection title='Chicken' logo={faEgg} items={chickenItems} />
      );
      break;
    case 'Beverages':
      renderedSection = (
        <MenuSection
          title='Beverages'
          logo={faGlassWaterDroplet}
          items={beverages}
        />
      );
      break;
    case 'Coffee':
      renderedSection = (
        <MenuSection title='Coffees' logo={faCoffee} items={coffees} />
      );
      break;
  }

  return (
    <>
      <SearchBar />
      {size.width && size.width < 768 ? (
        <SectionSlider
          activeSection={activeSection}
          onLinkClick={changeActiveSection}
        />
      ) : (
        <MenuNavBar
          activeSection={activeSection}
          onLinkClick={changeActiveSection}
        />
      )}

      {renderedSection}
    </>
  );
}
