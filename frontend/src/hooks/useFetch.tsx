import { AxiosRequestConfig } from 'axios';
import { RequestConfig } from '../utils';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAxios } from '.';

export function useFetch<T>(config: AxiosRequestConfig<RequestConfig>) {
  const axiosPrivate = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axiosPrivate.request<T>({
          ...config,
          signal: controller.signal,
        });
        if (!ignore) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    fetchData();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [axiosPrivate, config, location, navigate]);

  return data;
}
