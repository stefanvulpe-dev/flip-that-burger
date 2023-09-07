import burgerImage from '../assets/main/hero-hamburger.png';

export type MenuItem = {
  id: number;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  new?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Burger',
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato'],
    price: 5.99,
    image: burgerImage,
    new: true,
  },
  {
    id: 2,
    name: 'Chicago Cheeseburger',
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce'],
    price: 6.99,
    image: burgerImage,
    new: true,
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
  {
    id: 6,
    name: 'Bacon Cheeseburger',
    ingredients: ['Beef Patty', 'Bacon', 'Cheese'],
    price: 7.99,
    image: burgerImage,
  },
  {
    id: 7,
    name: 'Spicy Chicken Burger',
    ingredients: [
      'Chicken patty',
      'Spicy sauce',
      'Lettuce',
      'Tomato',
      'Onion',
      'Pickles',
    ],
    price: 9.49,
    image: burgerImage,
  },
  {
    id: 8,
    name: 'BBQ Bacon Burger',
    ingredients: [
      'Beef patty',
      'Bacon',
      'BBQ sauce',
      'Lettuce',
      'Tomato',
      'Onion',
    ],
    price: 11.49,
    image: burgerImage,
  },
  {
    id: 9,
    name: 'Fish Burger',
    ingredients: ['Fish fillet', 'Lettuce', 'Tomato', 'Tartar sauce'],
    price: 8.99,
    image: burgerImage,
  },
  {
    id: 10,
    name: 'Turkey Burger',
    ingredients: [
      'Turkey patty',
      'Lettuce',
      'Tomato',
      'Onion',
      'Ketchup',
      'Mustard',
    ],
    price: 9.99,
    image: burgerImage,
  },
];
