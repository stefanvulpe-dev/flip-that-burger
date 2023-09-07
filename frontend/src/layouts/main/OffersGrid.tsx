import { BurgerCard } from '../../components/index';
import burgerImage from '../../assets/main/hero-hamburger.png';

export function OffersGrid() {
  return (
    <div className='grid gap-6 grid-flow-row place-content-center justify-items-center sm:grid-cols-2 xl:grid-cols-6'>
      <BurgerCard
        title='The Japanese Oishii Burger with cocoa buns'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='bg-accent-300'
        borderColor='border-accent-300'
        gridColSpan='xl:col-span-3'
      />
      <BurgerCard
        title='Burger with Benefits'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='bg-accent-200'
        borderColor='border-accent-200'
        gridColSpan='xl:col-span-3'
      />
      <BurgerCard
        title='Fatboy Combo'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='bg-accent-100'
        borderColor='border-accent-100'
        gridColSpan='xl:col-span-2'
      />
      <BurgerCard
        title='The Japanese Oishii Burger'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='bg-neutral-100'
        borderColor='border-neutral-100'
        gridColSpan='xl:col-span-2'
      />
      <BurgerCard
        title='The Japanese Oishii Burger'
        subtitle='this month special'
        image={burgerImage}
        link='/japanese'
        bgColor='bg-neutral-500'
        borderColor='border-neutral-500'
        gridColSpan='xl:col-span-2'
      />
    </div>
  );
}
