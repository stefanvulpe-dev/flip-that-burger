import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function PromoSection({
  title,
  subtitle,
  description,
  buttonText,
  icon,
}: {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  icon: FontAwesomeIconProps['icon'];
}) {
  return (
    <section className='group grid justify-items-center items-center gap-4 last-of-type:mt-36 py-8 md:last-of-type:mt-0'>
      <p className='text-accent-200 uppercase font-semibold md:justify-self-start md:group-last-of-type:justify-self-end'>
        {subtitle}
      </p>
      <h2 className='text-2xl text-neutral-300 font-bold max-w-[20ch] text-center md:text-start md:max-w-[15ch] lg:text-3xl md:justify-self-start md:group-last-of-type:justify-self-end md:group-last-of-type:text-end'>
        {title}
      </h2>
      <p className='text-neutral-300 max-w-[30ch] text-center text-sm lg:text-base md:text-start md:group-last-of-type:text-end'>
        {description}
      </p>
      <Link
        to='/order'
        className='text-accent-400 font-semibold bg-accent-200 px-6 py-3 rounded-full md:justify-self-start md:group-last-of-type:justify-self-end transition-colors hover:bg-accent-300'>
        <FontAwesomeIcon icon={icon} className='pr-2' />
        {buttonText}
      </Link>
    </section>
  );
}
