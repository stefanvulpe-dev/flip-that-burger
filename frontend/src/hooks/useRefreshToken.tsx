import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '.';
import { axiosPrivate } from '../api/axios';

export function useRefreshToken() {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveToken, removeToken } = useAuth();

  const refresh = async () => {
    try {
      const response = await axiosPrivate.get('/auth/refresh');
      console.log(response.data);
      console.log(response.headers);
      saveToken(response.data.accessToken);
      return response.data.accessToken;
    } catch (error) {
      console.log(error);
      removeToken();
      navigate('/login', {
        state: { from: location },
        replace: true,
      });
    }
  };

  return refresh;
}
