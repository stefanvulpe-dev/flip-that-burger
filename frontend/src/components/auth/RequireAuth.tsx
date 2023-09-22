import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../hooks';

export function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    <>
      {auth.token ? (
        <Outlet />
      ) : (
        <Navigate to='/login' state={{ from: location }} replace />
      )}
    </>
  );
}
