import {
  menuItems,
  pizzas,
  chickenItems,
  beverages,
  coffees,
  MenuItem,
} from '../../data/MenuItems';
import { MenuListItem } from './MenuListItem';

export function MenuList({ category }: { category: string }) {
  let renderdItems: MenuItem[];

  switch (category) {
    case 'pizzas':
      renderdItems = pizzas;
      break;
    case 'chicken':
      renderdItems = chickenItems;
      break;
    case 'beverages':
      renderdItems = beverages;
      break;
    case 'coffee':
      renderdItems = coffees;
      break;
    default:
      renderdItems = menuItems;
      break;
  }

  return (
    <ul className='md:grid md:grid-cols-2 gap-x-10 xl:gap-x-24'>
      {renderdItems.map(item => (
        <MenuListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
