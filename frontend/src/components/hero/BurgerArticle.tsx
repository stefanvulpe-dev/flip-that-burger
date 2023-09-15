import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem } from '../../data';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function BurgerArticle({ menuItem }: { menuItem: MenuItem }) {
  return (
    <article className='text-accent-400 w-11/12 max-w-6xl mx-auto grid gap-6 md:grid-cols-fill-2 lg:bg-hero-desktop bg-no-repeat bg-right-bottom'>
      <div>
        <div className='flex gap-2 items-center pb-4'>
          <p className='uppercase font-bold text-xs lg:text-base'>
            New in menu
          </p>
          <hr className='w-full max-w-[8rem] border-t-2 border-accent-200' />
        </div>
        <h1 className='text-4xl lg:text-5xl font-bold w-min uppercase pb-4'>
          {menuItem.name}
        </h1>
        <div className='bg-accent-200 p-4 xl:flex xl:justify-between xl:items-center'>
          <ul className='list-disc font-semibold text-sm xl:text-base pl-4 w-5/6 xl:w-3/5 lg:flex lg:justify-between lg:items-center m-0'>
            {menuItem.ingredients.map(ingredient => (
              <li className='py-2' key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
          <div className='flex justify-between lg:gap-4 items-center pt-4 xl:pt-0'>
            <p className='font-bold text-lg lg:text-xl text-center'>
              Only <span>${menuItem.price}</span>
            </p>
            <button
              type='button'
              className='text-accent-200 bg-accent-400 px-3 py-1 text-xl font-bold border-accent-400 rounded-full hover:bg-accent-300 hover:text-accent-400 transition-colors'>
              <span className='hidden'>Buy it now</span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <img
        src={menuItem.image}
        alt='burger-image'
        className='max-w-[16rem] mx-auto self-center lg:max-w-xs xl:max-w-md'
      />
    </article>
  );
}
