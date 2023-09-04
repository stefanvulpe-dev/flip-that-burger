import { HeroCarousel } from '../components/hero/HeroCarousel';

export function Hero() {
  return (
    <div className='z-10 bg-accent-100 py-8 md:py-12 min-h-screen flex flex-col gap-6 justify-center items-center'>
      <HeroCarousel />
    </div>
  );
}
