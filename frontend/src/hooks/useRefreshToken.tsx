import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '.';
import { axiosPrivate } from '../api/axios';

export function useRefreshToken() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axiosPrivate.get(
        `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
      );
      console.log(response.data);
      console.log(response.headers);
      setAuth({ token: response.data.accessToken });
      return response.data.accessToken;
    } catch (error) {
      console.log(error);
      setAuth({ token: null });
      navigate('/login', {
        state: { from: location },
        replace: true,
      });
    }
  };

  return refresh;
}
