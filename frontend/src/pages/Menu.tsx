import { CategoriesList } from '../components/menu/CategoriesList';
import { MenuList } from '../components/menu/MenuList';

export function Menu() {
  return (
    <article className='w-11/12 max-w-6xl mx-auto pt-10'>
      <p className='text-center uppercase text-accent-200 font-semibold'>
        Menu
      </p>
      <h1 className='text-center text-2xl font-bold max-w-[14ch] mx-auto lg:max-w-none xl:text-3xl'>
        Choose your food & order now!
      </h1>
      <CategoriesList />
      <MenuList />
    </article>
  );
}
