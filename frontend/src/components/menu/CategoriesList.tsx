import { menuCategoris } from '../../data/MenuCategories';

export function CategoriesList() {
  return (
    <ul className='flex justify-between pt-10 pb-10 xl:pb-20'>
      {menuCategoris.map(category => (
        <li key={category.label} className='cursor-pointer'>
          <img
            src={category.url}
            alt='menu-logo'
            className='max-w-[2rem] lg:max-w-[3rem] mx-auto'
          />
          <p className='uppercase text-xs pt-2'>{category.label}</p>
        </li>
      ))}
    </ul>
  );
}
