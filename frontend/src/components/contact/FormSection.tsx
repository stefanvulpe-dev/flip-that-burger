import { ContactForm } from './ContactForm';

export function FormSection() {
  return (
    <section className='lg:flex-1 max-w-md mx-auto'>
      <h2 className='text-neutral-300 font-bold text-xl text-center lg:text-2xl'>
        Drop us a line
      </h2>
      <ContactForm />
    </section>
  );
}
