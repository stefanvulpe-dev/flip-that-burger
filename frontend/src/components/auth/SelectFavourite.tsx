import { UseFormSetValue } from 'react-hook-form';
import { FormGroupProps, TSignUpSchema } from '../../utils';
import Select from 'react-select';

export function SelectFavourite({
  id,
  label,
  error,
  selectedOption,
  setSelectedOption,
  setValue,
}: {
  id: keyof TSignUpSchema;
  label: string;
  error: FormGroupProps<TSignUpSchema>['error'];
  selectedOption: { value: string; label: string };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }>
  >;
  setValue: UseFormSetValue<TSignUpSchema>;
}) {
  const options = [
    { value: 'Iasi, RO', label: 'Iasi, RO' },
    { value: 'Buc, RO', label: 'Bucharest, RO' },
    { value: 'Cluj, RO', label: 'Cluj, RO' },
    { value: 'Timis, RO', label: 'Timisoara, RO' },
    { value: 'Const, RO', label: 'Constanta, RO' },
  ];

  return (
    <div className='mb-6 md:mb-0'>
      <label className='block pb-3' htmlFor={id}>
        {label}
      </label>
      <Select
        id={id}
        name={id}
        value={selectedOption}
        options={options}
        onChange={e => {
          setSelectedOption({ value: e?.value || '', label: e?.label || '' });
          setValue(id, e?.value || '');
        }}
        styles={{
          control: provided => ({
            ...provided,
            border: '2px solid hsl(0, 0%, 45%)',
            borderRadius: '0.25rem',
            ':focus-within': {
              outline: 'none',
              border: '2px solid hsl(26, 99%, 54%)',
            },
          }),
          valueContainer: provided => ({
            ...provided,
            paddingBlock: '0.5rem',
            paddingInline: '0.75rem',
          }),
          input: provided => ({
            ...provided,
            margin: 0,
            padding: 0,
          }),
        }}
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
