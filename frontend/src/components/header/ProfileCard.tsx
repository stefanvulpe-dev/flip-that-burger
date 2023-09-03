import { faBraille } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ForwardedRef, forwardRef } from 'react';

export const ProfileCard = forwardRef(function (
  _props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className='bg-accent-100 py-5 absolute -bottom-96 sm:-bottom-80 left-0 right-0 transition-position ease-in-out duration-700 [&:not(.active)]:-left-full [&:not(.active)]:right-full md:static md:py-0'>
      <div className='mx-auto justify-self-center group bg-accent-200 rounded-l-[3rem] rounded-r-2xl flex justify-center items-center gap-6 py-2 px-4 w-max cursor-pointer'>
        <img
          src='https://i.pravatar.cc/300'
          alt='avatar'
          className='max-w-[3.5rem] border-4 border-accent-400 rounded-full object-contain'
        />
        <p className='text-accent-400 text-base xl:text-lg font-semibold border-b-2 border-accent-200 transition-colors group-hover:border-b-2 group-hover:border-accent-400'>
          John Doeeeeeeee
        </p>
        <FontAwesomeIcon icon={faBraille} className='text-lg text-accent-400' />
      </div>
    </div>
  );
});
