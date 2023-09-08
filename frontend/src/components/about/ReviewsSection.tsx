import { ReactNode } from 'react';

export function ReviewsSection({ children }: { children: ReactNode }) {
  return (
    <section className='py-10 w-11/12 max-w-4xl mx-auto'>
      <p className='uppercase w-fit mx-auto text-accent-200 font-semibold text-center text-sm md:text-base'>
        Testimonial
      </p>
      <h2 className='text-neutral-300 w-fit mx-auto text-2xl font-bold text-center pb-10'>
        Clients review
      </h2>
      {children}
    </section>
  );
}
