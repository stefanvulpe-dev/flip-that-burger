import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem } from '../../data/MenuItems';
import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';

export function MenuSection({
  logo,
  title,
  items,
}: {
  logo: IconDefinition;
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className='xl:col-start-2'>
      <h2 className='text-neutral-300 font-bold text-xl mb-4 ml-4'>
        <FontAwesomeIcon icon={logo} className='pr-3' />
        {title}
      </h2>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            className='p-4 grid grid-cols-3 justify-center gap-4 border-b-2 border-neutral-600'>
            <img
              src={item.image}
              alt='item-image'
              className='max-w-[5rem] sm:max-w-[8rem] self-center'
            />
            <div className='text-neutral-300'>
              <p className='pb-2 md:text-lg'>{item.name}</p>
              <p className='text-xs sm:text-sm md:text-base'>
                {item.ingredients.join(', ')}
              </p>
            </div>
            <div className='text-neutral-300 text-center flex flex-col justify-between'>
              <p className='font-bold md:text-lg'>$ {item.price}</p>
              <button className='w-fit mx-auto'>
                <FontAwesomeIcon
                  icon={faPlus}
                  className='text-accent-400 bg-accent-300 rounded-full text-xs sm:text-base font-bold aspect-square p-2 transition-colors hover:bg-accent-200'
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
