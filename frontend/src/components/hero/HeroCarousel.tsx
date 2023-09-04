import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import burgerImage from '../../assets/hero-humburger.png';

const menuItems = [
  {
    id: 1,
    name: 'Classic Burger',
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato'],
    price: 5.99,
    image: burgerImage,
  },
  {
    id: 2,
    name: 'Chicago Cheeseburger',
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce'],
    price: 6.99,
    image: burgerImage,
  },
  {
    id: 3,
    name: 'Veggie Burger',
    ingredients: ['Veggie Patty', 'Lettuce', 'Mayonnaise'],
    price: 4.99,
    image: burgerImage,
  },
  {
    id: 4,
    name: 'Bacon Burger',
    ingredients: ['Bacon', 'Ketchup', 'Mustard'],
    price: 7.99,
    image: burgerImage,
  },
  {
    id: 5,
    name: 'Double Cheeseburger',
    ingredients: ['2 Beef Patties', '2 Slices of Cheese', 'Ketchup'],
    price: 8.99,
    image: burgerImage,
  },
];

export function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItem = menuItems[selectedIndex];

  return (
    <>
      <article className='text-accent-400 w-11/12 max-w-6xl mx-auto grid gap-6 md:grid-cols-fill-2'>
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
                className='text-accent-200 bg-accent-400 px-3 py-1 text-xl font-bold border-accent-400 rounded-full hover:bg-accent-300 transition-colors'>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
        <img
          src={menuItem.image}
          alt='burger-image'
          className='max-w-[16rem] mx-auto self-center lg:max-w-xs'
        />
      </article>
      <div className='w-11/12 max-w-6xl mx-auto pt-4 text-accent-400 font-semibold lg:text-lg'>
        <button
          type='button'
          onClick={() => {
            if (selectedIndex === 0) {
              setSelectedIndex(menuItems.length - 1);
            } else {
              setSelectedIndex(selectedIndex - 1);
            }
          }}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className='text-accent-200 pr-2'
          />
        </button>
        <span className='tracking-widest'>
          <span className='text-accent-200'>0{selectedIndex + 1} / </span> 0
          {menuItems.length}
        </span>
        <button
          type='button'
          onClick={() => {
            if (selectedIndex === menuItems.length - 1) {
              setSelectedIndex(0);
            } else {
              setSelectedIndex(selectedIndex + 1);
            }
          }}>
          <FontAwesomeIcon
            icon={faAngleRight}
            className='text-accent-200 pl-2'
          />
        </button>
      </div>
    </>
  );
}
