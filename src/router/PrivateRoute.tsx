import { AuthContext } from 'auth/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element | JSX.Element[];
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
