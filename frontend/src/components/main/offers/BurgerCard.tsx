import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function BurgerCard({
  title,
  subtitle,
  image,
  link,
  bgColor,
  borderColor,
  gridColSpan,
}: {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  bgColor: string;
  borderColor: string;
  gridColSpan?: string;
}) {
  return (
    <div
      className={`${bgColor} ${gridColSpan} max-w-sm w-full xl:max-w-none grid justify-items-center gap-6 items-center rounded-lg py-6 px-6 first-of-type:xl:py-10 group first-of-type:xl:grid-cols-2 [&:nth-of-type(2)]:xl:grid-cols-2 first-of-type:xl:justify-items-start [&:nth-of-type(2)]:xl:justify-items-start`}>
      <p className='uppercase text-accent-400 font-semibold text-sm'>
        {subtitle}
      </p>
      <h3 className='text-xl font-bold text-accent-400 text-center max-w-[20ch] group-first-of-type:xl:row-start-2 group-[&:nth-of-type(2)]:xl:row-start-2 group-first-of-type:xl:text-start group-[&:nth-of-type(2)]:xl:text-start'>
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className='max-w-[10rem] group-first-of-type:xl:row-span-3 group-[&:nth-of-type(2)]:xl:row-span-3 group-first-of-type:xl:justify-self-center group-[&:nth-of-type(2)]:xl:justify-self-center'
      />
      <Link
        to={link}
        className='text-accent-400 uppercase text-sm group-first-of-type:xl:row-start-3 group-[&:nth-of-type(2)]:xl:row-start-3'>
        <span
          className={`transition-colors border-b-2 ${borderColor} hover:border-accent-400`}>
          Order now
        </span>
        <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
      </Link>
    </div>
  );
}
