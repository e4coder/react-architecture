
import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from '@tanstack/react-router';
import { useUser } from '../../../../lib/auth'

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return (
      <Navigate
        to={`/auth?redirectTo=${encodeURIComponent(location.pathname)}`}
      />
    );
  }

  return children;
};

export default ProtectedRoute