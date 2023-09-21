import { FormGroupProps } from '../../utils';

export function FormGroup({ id, type, label, register }: FormGroupProps) {
  return (
    <div className='mb-6 md:mb-0'>
      <label className='block pb-3' htmlFor={id}>
        {label}
      </label>
      <input
        {...register('firstName')}
        type={type}
        id={id}
        className='block w-full px-4 py-2 text-neutral-300 border-2 border-neutral-500 rounded focus:outline-none focus:border-accent-300'
      />
    </div>
  );
}
