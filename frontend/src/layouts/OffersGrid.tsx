import { BurgerCard } from '../components/index';
import burgerImage from '../assets/hero-hamburger.png';

export function OffersGrid() {
  return (
    <div className='grid gap-6 grid-flow-row place-content-center justify-items-center sm:grid-cols-2 xl:grid-cols-6'>
      <BurgerCard
        title='The Japanese Oishii Burger with cocoa buns'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='accent-300'
        gridColSpan='xl:col-span-3'
      />
      <BurgerCard
        title='Burger with Benefits'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='accent-200'
        gridColSpan='xl:col-span-3'
      />
      <BurgerCard
        title='Fatboy Combo'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='accent-100'
        gridColSpan='xl:col-span-2'
      />
      <BurgerCard
        title='The Japanese Oishii Burger'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='neutral-100'
        gridColSpan='xl:col-span-2'
      />
      <BurgerCard
        title='The Japanese Oishii Burger'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='neutral-500'
        gridColSpan='xl:col-span-2'
      />
    </div>
  );
}
