import { useState } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormSetValue,
} from 'react-hook-form';
import { FormGroupProps, TSignUpSchema } from '../../utils';

export function PictureUpload({
  register,
  setValue,
  error,
}: {
  register: FormGroupProps<TSignUpSchema>['register'];
  setValue: UseFormSetValue<TSignUpSchema>;
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
        {...register('photo')}
        type='file'
        id='photo'
        accept='image/png, image/jpeg'
        className='hidden'
        onChange={e => {
          if (!e.target.files) return;
          const fileName = e.target.files[0].name || 'Choose a file';
          if (fileName.length <= 20) {
            setFileName(fileName);
          } else {
            setFileName(fileName.slice(0, 20) + '...' + fileName.slice(-8));
          }
          setValue('photo', e.target.files[0]);
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
