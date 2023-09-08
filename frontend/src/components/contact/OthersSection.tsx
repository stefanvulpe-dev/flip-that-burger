import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function OthersSection() {
  return (
    <section className='lg:flex-1 max-w-sm mx-auto'>
      <h2 className='text-neutral-300 font-bold text-xl lg:text-2xl text-center mt-10 lg:mt-0'>
        Or find us here
      </h2>
      <div className='mt-10 py-6 px-4 rounded-lg shadow-2xl'>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className='text-4xl font-bold block mx-auto mb-6'
        />
        <p className='text-center'>Send us a message on Whats App</p>
      </div>
      <div className='mt-10 py-6 px-4 rounded-lg shadow-2xl'>
        <FontAwesomeIcon
          icon={faInbox}
          className='text-4xl font-bold block mx-auto mb-6'
        />
        <a href='mailto:abc@example.com' className='block text-center'>
          Reach us by email
        </a>
      </div>
    </section>
  );
}
