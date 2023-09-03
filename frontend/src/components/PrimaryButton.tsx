import { ForwardedRef, forwardRef } from 'react';

export const PrimaryButton = forwardRef(function (
  { text }: { text: string },
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className='bg-accent-100 py-6 absolute transition-position ease-in-out duration-700 [&:not(.active)]:-left-full [&:not(.active)]:right-full left-0 right-0 -bottom-72 sm:static sm:py-0'>
      <button
        type='button'
        className='mx-auto block text-accent-400 font-semibold text-base xl:text-lg bg-accent-200 px-6 py-2 rounded-xl transition-colors hover:bg-accent-300'>
        {text}
      </button>
    </div>
  );
});
