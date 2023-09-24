import { useAuth, useRefreshToken } from '.';
import { useEffect } from 'react';
import { axiosPrivate } from '../api';
import { AxiosError } from 'axios';

export function useAxios() {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const controller = new AbortController();

    const requestInterceptor = axiosPrivate.interceptors.request.use(
      config => {
        config.signal = controller.signal;
        if (auth.token && !config.headers['Authorization']) {
          config.headers.Authorization = `Bearer ${auth.token}`;
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
            error.config.headers['Authorization'] = `Bearer ${newAuthToken}`;
            return axiosPrivate.request(error.config);
          }
          return Promise.reject(error);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      controller.abort();
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);

  return axiosPrivate;
}
