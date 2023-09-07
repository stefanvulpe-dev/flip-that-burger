import { ReactNode } from 'react';

export function ReviewsSection({ children }: { children: ReactNode }) {
  return (
    <section className='py-10 w-11/12 max-w-4xl mx-auto'>
      <p className='uppercase text-accent-200 font-semibold text-center'>
        Testimonial
      </p>
      <h2 className='text-neutral-300 text-2xl font-bold text-center pb-10'>
        Clients review
      </h2>
      {children}
    </section>
  );
}
