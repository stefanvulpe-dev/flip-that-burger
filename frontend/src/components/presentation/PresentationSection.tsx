import { Link } from 'react-router-dom';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PresentationSection({
  subtitle,
  title,
  description,
  link,
  linkText,
  image,
}: {
  subtitle: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
}) {
  return (
    <section className='w-11/12 max-w-6xl mx-auto pt-10 grid md:grid-cols-2 gap-6 md:gap-4 justify-items-center md:justify-items-start'>
      <p className='uppercase text-accent-200 font-semibold md:self-end'>
        {subtitle}
      </p>
      <h2 className='text-2xl md:text-4xl font-bold text-neutral-300 max-w-[15ch] md:max-w-[10ch] text-center md:text-start md:row-start-2 md:row-end-3'>
        {title}
      </h2>
      <p className='text-neutral-300 max-w-[40ch] text-center text-sm lg:text-base md:max-w-none md:text-start md:row-start-3 md:row-end-4'>
        {description}
      </p>
      <Link
        to={link}
        className='w-max text-accent-400 bg-accent-200 rounded-full px-8 py-4 transition-colors hover:bg-accent-300 md:row-start-4 md:row-end-5 md:self-start'>
        <FontAwesomeIcon icon={faUsers} className='pr-2'></FontAwesomeIcon>
        {linkText}
      </Link>
      <img
        src={image}
        alt='section-burger'
        className='max-w-xs md:row-span-4 place-self-center'
      />
    </section>
  );
}
