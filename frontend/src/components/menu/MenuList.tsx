import { menuItems } from '../../data/MenuItems';
import { MenuListItem } from './MenuListItem';

export function MenuList() {
  return (
    <ul className='md:grid md:grid-cols-2 gap-x-10 xl:gap-x-24'>
      {menuItems.map(item => (
        <MenuListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
