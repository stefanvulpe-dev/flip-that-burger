import { Link } from 'react-router-dom';
import burgerImage from '../../assets/section-burger.png';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PresentationSection() {
  return (
    <section className='w-11/12 max-w-6xl mx-auto mt-6 grid md:grid-cols-2 gap-6 md:gap-4 justify-items-center md:justify-items-start'>
      <p className='uppercase text-accent-200 font-semibold md:self-end'>
        Welcome
      </p>
      <h2 className='text-2xl md:text-4xl font-bold text-neutral-300 md:max-w-[10ch] text-center md:text-start md:row-start-2 md:row-end-3'>
        We make the best burger in town
      </h2>
      <p className='text-neutral-300 max-w-[45ch] text-center md:max-w-none md:text-start md:row-start-3 md:row-end-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
        consectetur! Similique optio corporis quos expedita dignissimos iusto
        inventore iste adipisci.
      </p>
      <Link
        to='/about'
        className='w-max text-accent-400 bg-accent-200 rounded-full px-6 py-4 transition-colors hover:bg-accent-300 md:row-start-4 md:row-end-5 md:self-start'>
        <FontAwesomeIcon icon={faUsers} className='pr-4'></FontAwesomeIcon>
        More about us
      </Link>
      <img
        src={burgerImage}
        alt='section-burger'
        className='max-w-xs md:row-span-4 place-self-center'
      />
    </section>
  );
}
