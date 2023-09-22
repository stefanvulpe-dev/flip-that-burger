import { ForwardedRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

export const PrimaryButton = forwardRef(function (
  { text, onClick }: { text: string; onClick?: () => void },
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className='bg-accent-100 py-6 absolute z-20 transition-position ease-in-out duration-700 [&:not(.active)]:-left-full [&:not(.active)]:right-full left-0 right-0 -bottom-[22rem] sm:static sm:py-0'>
      <Link
        to='/online-order'
        onClick={onClick}
        className='block max-w-[15ch] xl:max-w-[20ch] mx-auto text-center text-accent-400 font-semibold text-base xl:text-lg bg-accent-200 px-6 py-2 rounded-xl transition-opacity hover:opacity-80'>
        {text}
      </Link>
    </div>
  );
});
