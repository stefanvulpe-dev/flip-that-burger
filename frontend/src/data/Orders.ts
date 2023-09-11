export type Order = {
  id: number;
  items: string[];
  total: number;
  date: string;
};

export const orders: Order[] = [
  {
    id: 1,
    items: ['1x Double Cheeseburger', '2x Spicy Chicken Burger', '1x Big Mac'],
    total: 15,
    date: '2021-01-01',
  },
  {
    id: 2,
    items: [
      '1x Clasic Cheeseburger',
      '1x Chicago Cheeseburger',
      '3x Turkish Burger',
    ],
    total: 20,
    date: '2021-01-02',
  },
  {
    id: 3,
    items: ['2x Veggie', '3x Bacon Burger', '1x BBQ Bacon Burger'],
    total: 25,
    date: '2021-01-03',
  },
  {
    id: 4,
    items: ['3x Fish Burger', '2x Classic Burger', '1x Big Mac'],
    total: 30,
    date: '2021-01-04',
  },
  {
    id: 5,
    items: ['4x Double Big Mac', '2x BBQ Cheeseburger', '1x Tasty Burger'],
    total: 35,
    date: '2021-01-05',
  },
];
