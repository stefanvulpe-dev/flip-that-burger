import { BurgersCarousel } from './BurgersCarousel';

export function BurgersSection() {
  return (
    <section className='mt-20 w-11/12 max-w-sm md:max-w-6xl mx-auto'>
      <p className='uppercase font-semibold text-accent-200 text-center mb-4'>
        specialist combo
      </p>
      <h2 className='text-2xl lg:text-4xl font-bold text-neutral-300 text-center mb-10'>
        Our delicious burgers
      </h2>
      <BurgersCarousel />
    </section>
  );
}
