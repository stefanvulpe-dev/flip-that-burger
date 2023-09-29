import {
  faBraille,
  faClose,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useAxios } from '../../hooks';
import { AxiosError } from 'axios';
import defaultPicture from '../../assets/user/default-user.png';

type ProfileCardData = {
  username: string;
  photo: string;
};

export const ProfileCard = forwardRef(function (
  { onClick }: { onClick: () => void },
  ref: ForwardedRef<HTMLDivElement>,
) {
  const infoRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLButtonElement>(null);

  const [isInfoActive, setIsInfoActive] = useState(false);

  const { removeToken, getToken } = useAuth();
  const accessToken = getToken();

  const axiosPrivate = useAxios();
  const queryClient = useQueryClient();

  const { data, status } = useQuery<
    ProfileCardData,
    AxiosError<Record<string, string>>,
    ProfileCardData
  >({
    queryKey: ['users', 'card-details'],
    queryFn: async () => {
      const { data } = await axiosPrivate.get<ProfileCardData>(
        '/users/card-details',
      );
      return data;
    },
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationKey: ['auth', 'logout'],
    mutationFn: () => axiosPrivate.delete('/auth/logout'),
    onSuccess: () => {
      queryClient.setQueriesData(['users', 'card-details'], null);
    },
  });

  return (
    <div
      ref={ref}
      className='self-center justify-self-end xl:justify-self-center bg-accent-100 pt-8 pb-48 absolute -bottom-[40rem] sm:-bottom-[35rem] left-0 right-0 transition-position ease-in-out duration-700 z-[20] [&:not(.active)]:-left-full [&:not(.active)]:right-full md:static md:py-0'>
      <button
        onClick={() => {
          if (accessToken === '') return;
          infoRef.current?.classList.toggle('active');
          profileRef.current?.classList.toggle('active');
          setIsInfoActive(!isInfoActive);
        }}
        ref={profileRef}
        className='relative mx-auto justify-self-center bg-accent-200 [&:not(.active)]:rounded-l-[3rem] [&:is(.active)]:rounded-ss-xl [&:is(.active)]:rounded-ee-none transition-borderRadius duration-300 ease-in-out rounded-r-2xl flex justify-center items-center gap-6 py-2 px-4 w-max cursor-pointer'>
        <img
          src={!data || status === 'error' ? defaultPicture : data.photo}
          alt='avatar'
          className='max-w-[3.5rem] border-4 border-accent-400 rounded-full object-contain'
        />
        {!data || status === 'error' ? (
          <Link
            to='/login'
            className='block max-w-[14ch] mx-auto group'
            onClick={e => {
              e.stopPropagation();
              onClick();
            }}>
            <span className='text-accent-400 border-accent-200 border-b-2 transition-colors group-hover:border-b-2 group-hover:border-accent-400'>
              Log in right here
            </span>
          </Link>
        ) : (
          <p className='text-accent-400 text-base xl:text-lg font-semibold border-accent-200 border-b-2 transition-colors hover:border-b-2 hover:border-accent-400'>
            {data.username}
          </p>
        )}
        <FontAwesomeIcon
          icon={isInfoActive ? faClose : faBraille}
          className='text-lg text-accent-400'
        />
        <div
          ref={infoRef}
          className='transition-visibility duration-400 ease-in absolute top-[calc(100%-1px)] left-0 right-0 [&:not(.active)]:invisible visible py-6 bg-accent-200 rounded-es-xl rounded-ee-xl text-accent-400'>
          <Link
            to='/profile'
            className='flex gap-4 justify-start items-center mb-6 max-w-[14ch] mx-auto group'
            onClick={onClick}>
            <FontAwesomeIcon icon={faUser} className='text-xl' />
            <span className='border-accent-200 border-b-2 transition-colors group-hover:border-b-2 group-hover:border-accent-400'>
              Your profile
            </span>
          </Link>
          <Link
            to='/login'
            className='flex gap-4 justify-start items-center max-w-[14ch] mx-auto group'
            onClick={() => {
              mutate();
              removeToken();
              onClick();
            }}>
            <FontAwesomeIcon icon={faRightFromBracket} className='text-xl' />
            <span className='border-accent-200 border-b-2 transition-colors group-hover:border-b-2 group-hover:border-accent-400'>
              Sign out
            </span>
          </Link>
        </div>
      </button>
    </div>
  );
});
