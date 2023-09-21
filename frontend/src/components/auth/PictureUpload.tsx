import { FormGroupProps } from '../../utils';

export function PictureUpload({ register }: Pick<FormGroupProps, 'register'>) {
  return (
    <div>
      <label className='block pb-3' htmlFor='photo'>
        Profile picture
      </label>
      <input
        {...register('photo')}
        type='file'
        name='photo'
        id='photo'
        className='hidden'
      />
      <label
        htmlFor='photo'
        className='relative block w-full px-4 py-2 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300 cursor-pointer after:absolute after:content-[url("/src/assets/signup/open-folder.svg")] after:top-1/2 after:-translate-y-1/2 after:right-4'>
        Choose a file
      </label>
    </div>
  );
}
