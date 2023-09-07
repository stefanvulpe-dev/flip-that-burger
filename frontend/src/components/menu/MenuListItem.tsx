import { MenuItem } from '../../data/MenuItems';

export function MenuListItem({ item }: { item: MenuItem }) {
  return (
    <li
      key={item.id}
      className={
        'flex pb-10 xl:pb-16 justify-between relative ' +
        (item.new
          ? `before:absolute before:-top-4 before:left-0 before:content-['new'] before:uppercase before:bg-accent-200 before:text-accent-400 before:text-xs before:px-4 before:rounded-md`
          : '')
      }>
      <p>
        <span className='block text-neutral-300 font-semibold lg:text-lg'>
          {item.name}
        </span>
        <span className='block text-neutral-500 text-sm lg:text-base max-w-[35ch]'>
          {item.ingredients.join(', ')}
        </span>
      </p>
      <p className='text-accent-200 font-semibold text-lg lg:text-xl'>
        ${item.price}
      </p>
    </li>
  );
}
