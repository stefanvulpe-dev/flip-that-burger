export function OffersSection({ children }: { children: React.ReactNode }) {
  return (
    <section className='mt-10'>
      <p className='uppercase font-semibold text-accent-200 text-center mb-4'>
        Combos
      </p>
      <h2 className='text-2xl lg:text-4xl max-w-[16ch] mx-auto font-bold text-neutral-300 text-center mb-10'>
        Choose your combo & order now!
      </h2>
      {children}
    </section>
  );
}
