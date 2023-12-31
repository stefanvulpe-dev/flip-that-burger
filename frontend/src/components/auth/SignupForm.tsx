import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormControls, FormGroup, PictureUpload, SelectFavourite } from '.';
import { SignUpSchema, TSignUpSchema } from '../../utils';
import { useState } from 'react';
import { useAuth } from '../../hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { axiosPublic } from '../../api';
import { useLocation, useNavigate } from 'react-router';

export function SignUpForm() {
  const [fileName, setFileName] = useState('Choose a file');
  const [selectedOption, setSelectedOption] = useState({
    value: '',
    label: 'Select...',
  });
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({ resolver: zodResolver(SignUpSchema) });

  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { saveToken } = useAuth();

  const { mutate, status, error } = useMutation<
    AxiosResponse<Record<string, string>>,
    Error,
    FormData
  >({
    mutationKey: ['auth', 'register'],
    mutationFn: newUser => axiosPublic.post('/auth/register', newUser),
    onSuccess: response => {
      saveToken(response.data.accessToken);
      queryClient.invalidateQueries(['users', 'card-details']);
      navigate('/', { state: { from: location }, replace: true });
    },
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = (
    data: TSignUpSchema,
    event?: React.BaseSyntheticEvent<object, unknown, unknown>,
  ) => {
    event?.preventDefault();
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('favouriteRestaurant', data.favouriteRestaurant);
    formData.append('email', data.email);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('photo', data.photo);
    mutate(formData);
    reset();
    setFileName('Choose a file');
    setSelectedOption({ value: '', label: 'Select...' });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>{error?.message}</div>;
  }

  return (
    <div className='py-8 px-6 rounded shadow-2xl w-11/12 max-w-md md:max-w-4xl'>
      <h1 className='text-neutral-300 font-bold text-2xl md:text-3xl text-center mb-12'>
        Create an account
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method='post'
        className='w-full md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-8 md:items-start'>
        <FormGroup<TSignUpSchema>
          id='firstName'
          label='First name'
          type='text'
          error={errors.firstName}
          register={register}
        />
        <FormGroup<TSignUpSchema>
          id='lastName'
          label='Last name'
          type='text'
          error={errors.lastName}
          register={register}
        />
        <FormGroup<TSignUpSchema>
          id='phone'
          label='Phone number'
          type='text'
          error={errors.phone}
          register={register}
        />
        <SelectFavourite
          id='favouriteRestaurant'
          label='Favourite restaurant'
          error={errors.favouriteRestaurant}
          setValue={setValue}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <FormGroup<TSignUpSchema>
          id='email'
          label='Email'
          type='email'
          error={errors.email}
          register={register}
        />
        <FormGroup<TSignUpSchema>
          id='username'
          label='Username'
          type='text'
          error={errors.username}
          register={register}
        />
        <FormGroup<TSignUpSchema>
          id='password'
          label='Password'
          type='password'
          error={errors.password}
          register={register}
        />
        <FormGroup<TSignUpSchema>
          id='confirmPassword'
          label='Confirm password'
          type='password'
          error={errors.confirmPassword}
          register={register}
        />
        <PictureUpload
          fileName={fileName}
          setFileName={setFileName}
          register={register}
          setValue={setValue}
          error={errors.photo}
        />
        <FormControls parentForm='signup' isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
