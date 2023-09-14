import { ReactElement } from 'react';
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
} from '../data/MenuItems';
import { MenuSection } from '../components';

export function MenuSectionReducer(
  state: { element: ReactElement; activeSection: string },
  action: Record<string, string>,
) {
  switch (action.type) {
    case 'Top sellers':
      return {
        element: (
          <MenuSection title='Top sellers' logo={faTrophy} items={menuItems} />
        ),
        activeSection: action.type,
      };
    case 'Burgers':
      return {
        element: (
          <MenuSection title='Burgers' logo={faBurger} items={menuItems} />
        ),
        activeSection: action.type,
      };
    case 'Pizzas':
      return {
        element: (
          <MenuSection title='Pizzas' logo={faPizzaSlice} items={pizzas} />
        ),
        activeSection: action.type,
      };
    case 'Chicken':
      return {
        element: (
          <MenuSection title='Chicken' logo={faEgg} items={chickenItems} />
        ),
        activeSection: action.type,
      };
    case 'Beverages':
      return {
        element: (
          <MenuSection
            title='Beverages'
            logo={faGlassWaterDroplet}
            items={beverages}
          />
        ),
        activeSection: action.type,
      };
    case 'Coffees':
      return {
        element: (
          <MenuSection title='Coffees' logo={faCoffee} items={coffees} />
        ),
        activeSection: action.type,
      };
    default:
      return state;
  }
}
