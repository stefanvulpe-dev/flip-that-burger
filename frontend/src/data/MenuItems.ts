import beverageImage from '../assets/main/beverages.png';
import coffeeImage from '../assets/main/coffee.png';
import chickenImage from '../assets/main/crispy.png';
import burgerImage from '../assets/main/hero-hamburger.png';
import pizzaImage from '../assets/main/pizza-slice.png';

export type MenuItem = {
  id: number;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  new?: boolean;
  topSeller?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Burger',
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato'],
    price: 5.99,
    image: burgerImage,
    new: true,
    topSeller: true,
  },
  {
    id: 2,
    name: 'Chicago Cheeseburger',
    ingredients: ['Beef Patty', 'Cheese', 'Lettuce'],
    price: 6.99,
    image: burgerImage,
    new: true,
    topSeller: true,
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
    ingredients: ['Chicken patty', 'Spicy sauce', 'Pickles'],
    price: 9.49,
    image: burgerImage,
  },
  {
    id: 8,
    name: 'BBQ Bacon Burger',
    ingredients: ['Beef patty', 'Bacon', 'BBQ sauce'],
    price: 11.49,
    image: burgerImage,
  },
  {
    id: 9,
    name: 'Fish Burger',
    ingredients: ['Fish fillet', 'Tomato', 'Tartar sauce'],
    price: 8.99,
    image: burgerImage,
  },
  {
    id: 10,
    name: 'Turkey Burger',
    ingredients: ['Turkey patty', 'Tomato', 'Onion'],
    price: 9.99,
    image: burgerImage,
  },
];

export const pizzas: MenuItem[] = [
  {
    id: 11,
    name: 'Margherita',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Basil'],
    price: 8.99,
    image: pizzaImage,
    new: true,
  },
  {
    id: 12,
    name: 'Pepperoni',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
    price: 9.99,
    image: pizzaImage,
    new: true,
    topSeller: true,
  },
  {
    id: 13,
    name: 'Hawaiian',
    ingredients: ['Mozzarella', 'Ham', 'Pineapple'],
    price: 10.99,
    image: pizzaImage,
  },
  {
    id: 14,
    name: 'Meat Lovers',
    ingredients: ['Ham', 'Pepperoni', 'Bacon'],
    price: 11.99,
    image: pizzaImage,
  },
  {
    id: 15,
    name: 'Veggie',
    ingredients: ['Mushrooms', 'Onion', 'Peppers'],
    price: 10.99,
    image: pizzaImage,
  },
  {
    id: 16,
    name: 'BBQ Chicken',
    ingredients: ['Mozzarella', 'Chicken', 'BBQ sauce'],
    price: 11.99,
    image: pizzaImage,
  },
  {
    id: 17,
    name: 'Supreme',
    ingredients: ['Mozzarella', 'Pepperoni', 'Peppers'],
    price: 12.99,
    image: pizzaImage,
    topSeller: true,
  },
  {
    id: 18,
    name: 'Buffalo Chicken',
    ingredients: ['Tomato sauce', 'Chicken', 'Buffalo sauce'],
    price: 11.99,
    image: pizzaImage,
  },
  {
    id: 19,
    name: 'Cheese',
    ingredients: ['Tomato sauce', 'Mozzarella'],
    price: 8.99,
    image: pizzaImage,
  },
  {
    id: 20,
    name: 'Mushroom',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Mushrooms'],
    price: 9.99,
    image: pizzaImage,
  },
];

export const chickenItems: MenuItem[] = [
  {
    id: 21,
    name: 'Chicken Tenders',
    ingredients: ['Chicken', 'Breadcrumbs', 'Mayonnaise'],
    price: 8.99,
    image: chickenImage,
    new: true,
  },
  {
    id: 22,
    name: 'Chicken Wings',
    ingredients: ['Chicken', 'BBQ sauce', 'Mayonnaise'],
    price: 9.99,
    image: chickenImage,
    new: true,
  },
  {
    id: 23,
    name: 'Chicken Nuggets',
    ingredients: ['Chicken', 'Breadcrumbs', 'Mayonnaise'],
    price: 7.99,
    image: chickenImage,
  },
  {
    id: 24,
    name: 'Chicken Burger',
    ingredients: ['Chicken', 'Lettuce', 'Mayonnaise'],
    price: 8.99,
    image: chickenImage,
  },
  {
    id: 25,
    name: 'Chicken Wrap',
    ingredients: ['Chicken', 'Lettuce', 'Mayonnaise'],
    price: 8.99,
    image: chickenImage,
  },
  {
    id: 26,
    name: 'Chicken Salad',
    ingredients: ['Chicken', 'Lettuce', 'Tomato'],
    price: 9.99,
    image: chickenImage,
  },
  {
    id: 27,
    name: 'Chicken Sandwich',
    ingredients: ['Chicken', 'Lettuce', 'Tomato'],
    price: 8.99,
    image: chickenImage,
  },
  {
    id: 28,
    name: 'Chicken Fingers',
    ingredients: ['Chicken', 'Breadcrumbs', 'Mayonnaise'],
    price: 8.99,
    image: chickenImage,
  },
  {
    id: 29,
    name: 'Chicken Salad Wrap',
    ingredients: ['Chicken', 'Lettuce', 'Tomato'],
    price: 9.99,
    image: chickenImage,
  },
  {
    id: 30,
    name: 'Chicken Caesar Salad',
    ingredients: ['Chicken', 'Lettuce', 'Tomato'],
    price: 9.99,
    image: chickenImage,
  },
];

export const beverages: MenuItem[] = [
  {
    id: 31,
    name: 'Mango Tango',
    ingredients: ['Mango', 'Pineapple', 'Coconut Milk'],
    price: 4.99,
    image: beverageImage,
    new: true,
    topSeller: true,
  },
  {
    id: 32,
    name: 'Berry Bliss',
    ingredients: ['Blueberries', 'Strawberries', 'Yogurt'],
    price: 5.49,
    image: beverageImage,
    new: true,
  },
  {
    id: 33,
    name: 'Tropical Delight',
    ingredients: ['Pineapple', 'Passion Fruit', 'Orange Juice'],
    price: 4.79,
    image: beverageImage,
    new: true,
  },
  {
    id: 34,
    name: 'Chai Latte',
    ingredients: ['Black Tea', 'Cinnamon', 'Milk'],
    price: 3.99,
    image: beverageImage,
  },
  {
    id: 35,
    name: 'Cucumber Cooler',
    ingredients: ['Cucumber', 'Lime', 'Mint'],
    price: 3.29,
    image: beverageImage,
  },
  {
    id: 36,
    name: 'Matcha Madness',
    ingredients: ['Matcha Green Tea', 'Honey', 'Almond Milk'],
    price: 5.99,
    image: beverageImage,
  },
  {
    id: 37,
    name: 'Raspberry Fizz',
    ingredients: ['Raspberries', 'Lemonade', 'Soda Water'],
    price: 4.49,
    image: beverageImage,
  },
  {
    id: 38,
    name: 'Turmeric Elixir',
    ingredients: ['Turmeric', 'Ginger', 'Honey'],
    price: 4.79,
    image: beverageImage,
  },
  {
    id: 39,
    name: 'Pomegranate Punch',
    ingredients: ['Pomegranate Juice', 'Lime', 'Grenadine'],
    price: 4.99,
    image: beverageImage,
  },
  {
    id: 40,
    name: 'Minty Mojito',
    ingredients: ['Lime', 'Mint Leaves', 'Rum'],
    price: 6.99,
    image: beverageImage,
  },
];

export const coffees: MenuItem[] = [
  {
    id: 41,
    name: 'Espresso',
    ingredients: ['Coffee Beans', 'Water'],
    price: 2.99,
    image: coffeeImage,
    new: true,
  },
  {
    id: 42,
    name: 'Cappuccino',
    ingredients: ['Espresso', 'Milk Foam', 'Cocoa Powder'],
    price: 3.99,
    image: coffeeImage,
    new: true,
  },
  {
    id: 43,
    name: 'Latte',
    ingredients: ['Espresso', 'Steamed Milk', 'Vanilla Syrup'],
    price: 4.49,
    image: coffeeImage,
  },
  {
    id: 44,
    name: 'Mocha',
    ingredients: ['Espresso', 'Hot Chocolate', 'Whipped Cream'],
    price: 4.79,
    image: coffeeImage,
  },
  {
    id: 45,
    name: 'Americano',
    ingredients: ['Espresso', 'Hot Water'],
    price: 3.49,
    image: coffeeImage,
  },
  {
    id: 46,
    name: 'Iced Coffee',
    ingredients: ['Cold Brew Coffee', 'Ice Cubes', 'Milk'],
    price: 4.29,
    image: coffeeImage,
  },
  {
    id: 47,
    name: 'Irish Coffee',
    ingredients: ['Whiskey', 'Sugar', 'Whipped Cream'],
    price: 5.99,
    image: coffeeImage,
  },
  {
    id: 48,
    name: 'Caramel Macchiato',
    ingredients: ['Espresso', 'Caramel Syrup', 'Steamed Milk'],
    price: 4.99,
    image: coffeeImage,
  },
  {
    id: 49,
    name: 'Vanilla Latte',
    ingredients: ['Espresso', 'Vanilla Syrup', 'Steamed Milk'],
    price: 4.49,
    image: coffeeImage,
  },
  {
    id: 50,
    name: 'Turkish Coffee',
    ingredients: ['Finely Ground Coffee', 'Water', 'Cardamom'],
    price: 3.99,
    image: coffeeImage,
  },
];
