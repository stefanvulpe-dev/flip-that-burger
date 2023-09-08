import { FormSection, OthersSection } from '../components';

export function Contact() {
  return (
    <div className='w-11/12 max-w-6xl mx-auto mt-10'>
      <article>
        <h1 className='text-2xl lg:text-3xl text-neutral-300 font-bold text-center'>
          Get in touch
        </h1>
        <p className='text-neutral-300 text-center max-w-[20ch] md:max-w-none lg:text-lg mx-auto mt-6'>
          We are here for you. How can we help?
        </p>
        <div className='lg:flex mt-14 lg:mt-24'>
          <FormSection />
          <OthersSection />
        </div>
      </article>
    </div>
  );
}
