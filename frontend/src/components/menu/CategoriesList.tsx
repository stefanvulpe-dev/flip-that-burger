import { menuCategories } from '../../data/MenuCategories';

export function CategoriesList({
  activeCategory,
  onClick,
}: {
  activeCategory: string;
  onClick: (category: string) => void;
}) {
  return (
    <ul className='flex justify-between my-20'>
      {menuCategories.map(category => (
        <li
          key={category.label}
          className={
            (activeCategory === category.label
              ? 'border-b-2 border-accent-300'
              : '') + ' cursor-pointer'
          }
          onClick={() => onClick(category.label)}>
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
