import { BurgersCarousel } from './BurgersCarousel';

export function BurgersSection() {
  return (
    <section className='mt-12 w-11/12 max-w-sm md:max-w-6xl mx-auto'>
      <p className='uppercase font-semibold text-accent-200 text-center'>
        specialist combo
      </p>
      <h2 className='text-2xl font-bold text-neutral-300 text-center mb-6'>
        Our delicious burgers
      </h2>
      <BurgersCarousel />
    </section>
  );
}
