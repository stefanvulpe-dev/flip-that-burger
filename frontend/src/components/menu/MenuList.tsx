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
  let items: MenuItem[];

  switch (category) {
    case 'pizzas':
      items = pizzas;
      break;
    case 'chicken':
      items = chickenItems;
      break;
    case 'beverages':
      items = beverages;
      break;
    case 'coffee':
      items = coffees;
      break;
    default:
      items = menuItems;
      break;
  }

  return (
    <ul className='md:grid md:grid-cols-2 gap-x-10 xl:gap-x-24'>
      {items.map(item => (
        <MenuListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
