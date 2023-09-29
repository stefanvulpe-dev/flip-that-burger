import { useAuth, useRefreshToken } from '.';
import { useEffect } from 'react';
import { axiosPrivate } from '../api';
import { AxiosError } from 'axios';

export function useAxios() {
  const refresh = useRefreshToken();
  const { getToken } = useAuth();
  const accessToken = getToken();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      config => {
        if (accessToken && !config.headers['authorization']) {
          config.headers['authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        if (error.response?.status === 403) {
          const newAuthToken = await refresh();
          if (error.config) {
            error.config.headers['authorization'] = `Bearer ${newAuthToken}`;
            return axiosPrivate.request(error.config);
          }
          return Promise.reject(error);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refresh]);

  return axiosPrivate;
}
