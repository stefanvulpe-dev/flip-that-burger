import { FieldValues, Path } from 'react-hook-form';
import { FormGroupProps } from '../../utils';

export function FormGroup<T extends FieldValues>({
  id,
  type,
  label,
  error,
  register,
}: FormGroupProps<T>) {
  return (
    <div className='mb-6 md:mb-0'>
      <label className='block pb-3' htmlFor={id.toString()}>
        {label}
      </label>
      <input
        {...register(id as Path<T>)}
        type={type}
        id={id.toString()}
        className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
      />
      <p
        className={`text-accent-200 text-sm pt-2 ${
          error ? 'visible' : 'invisible'
        }`}>
        {error?.message}
      </p>
    </div>
  );
}
