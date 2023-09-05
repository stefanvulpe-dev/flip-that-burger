import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function BurgerCard({
  title,
  subtitle,
  image,
  link,
  bgColor,
  gridColSpan,
}: {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  bgColor: string;
  gridColSpan?: string;
}) {
  return (
    <div
      className={`bg-${bgColor} ${gridColSpan} max-w-sm w-full xl:max-w-none grid justify-items-center gap-6 items-center rounded-lg py-6 px-6 first-of-type:xl:py-10 first-of-type:xl:grid-cols-2 [&:nth-of-type(2)]:xl:grid-cols-2`}>
      <p className='uppercase text-accent-400 font-semibold text-sm'>
        {subtitle}
      </p>
      <h3 className='text-xl font-bold text-accent-400 text-center max-w-[20ch] first-of-type:xl:row-start-2 [&:nth-of-type(2)]:xl:row-start-2'>
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className='max-w-[10rem] first-of-type:xl:row-span-3 [&:nth-of-type(2)]:xl:row-span-3'
      />
      <Link
        to={link}
        className='text-accent-400 uppercase text-sm first-of-type:xl:row-start-3 [&:nth-of-type(2)]:xl:row-start-3'>
        <span
          className={`transition-colors border-b-2 border-${bgColor} hover:border-accent-400`}>
          Order now
        </span>
        <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
      </Link>
    </div>
  );
}
