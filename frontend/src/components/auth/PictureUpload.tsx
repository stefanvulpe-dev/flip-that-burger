import { useState } from 'react';
import { FormGroupProps } from '../../utils';

export function PictureUpload({
  register,
  error,
}: Pick<FormGroupProps, 'register' | 'error'>) {
  const [fileName, setFileName] = useState('Choose a file');

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
        onChange={e => {
          const fileName = e.target.files?.[0].name || 'Choose a file';
          if (fileName.length <= 20) {
            setFileName(fileName);
          } else {
            setFileName(fileName.slice(0, 20) + '...' + fileName.slice(-8));
          }
        }}
      />
      <label
        htmlFor='photo'
        className='relative block w-full px-4 py-2 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300 cursor-pointer after:absolute after:content-[url("/src/assets/signup/open-folder.svg")] after:top-1/2 after:-translate-y-1/2 after:right-4'>
        {fileName}
      </label>
      <p
        className={`text-accent-200 text-sm pt-2 ${
          error ? 'visible' : 'invisible'
        }`}>
        {error?.message}
      </p>
    </div>
  );
}
