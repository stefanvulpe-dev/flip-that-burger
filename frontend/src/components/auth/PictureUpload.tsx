import { useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { FormGroupProps } from '../../utils';

export function PictureUpload({
  register,
  error,
}: {
  register: FormGroupProps['register'];
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldError>>
    | undefined;
}) {
  const [fileName, setFileName] = useState('Choose a file');

  return (
    <div>
      <label className='block pb-3' htmlFor='photo'>
        Profile picture
      </label>
      <input
        type='file'
        id='photo'
        name='photo'
        accept='image/png, image/jpeg'
        className='hidden'
        onChange={e => {
          if (!e.target.files) return;
          register('photo', {
            value: e.target.files[0],
          });
          const fileName = e.target.files[0].name || 'Choose a file';
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
        {`${error?.message}`}
      </p>
    </div>
  );
}
