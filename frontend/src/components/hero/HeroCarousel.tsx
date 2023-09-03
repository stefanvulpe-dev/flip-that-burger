import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
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
    name: 'Cheeseburger',
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
  const [selectedIndex] = useState(0);

  const menuItem = menuItems[selectedIndex];

  return (
    <>
      <section className='z-10 bg-neutral-700'>
        <p>New in menu</p>
        <hr />
        <h1>{menuItem.name}</h1>
        <section>
          <ul>
            {menuItem.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>
            Only <span>{menuItem.price}</span>
          </p>
          <button>+</button>
        </section>
      </section>
      <img src={menuItem.image} alt='burger-image' />
      <div>
        <button type='button'>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <span>1 / 3</span>
        <button type='button'>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
}
