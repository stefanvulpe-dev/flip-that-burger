import { FormControls, FormGroup } from '.';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema, TLoginSchema } from '../../utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
import { useAuth } from '../../hooks';
import { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();
  const { saveToken } = useAuth();

  const { mutate } = useMutation<
    AxiosResponse<Record<string, string>>,
    Error,
    TLoginSchema
  >({
    mutationKey: ['auth', 'login'],
    mutationFn: data => axiosPublic.post('/auth/login', data),
    onSuccess: response => {
      saveToken(response.data.accessToken);
      queryClient.invalidateQueries(['users', 'card-details']);
      navigate('/', { state: { from: location }, replace: true });
    },
  });

  const onSubmit: SubmitHandler<TLoginSchema> = (data: TLoginSchema) => {
    mutate(data);
    reset();
  };

  return (
    <div className='py-10 px-6 rounded shadow-2xl w-11/12 max-w-md'>
      <h1 className='text-neutral-300 font-bold text-2xl text-center mb-12'>
        Log into your account
      </h1>
      <form
        className='max-w-sm grid gap-y-4 mx-auto'
        onSubmit={handleSubmit(onSubmit)}>
        <FormGroup<TLoginSchema>
          id='username'
          label='Username'
          type='text'
          register={register}
          error={errors.username}
        />
        <FormGroup<TLoginSchema>
          id='password'
          label='Password'
          type='password'
          register={register}
          error={errors.password}
        />
        <FormControls parentForm='login' isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
