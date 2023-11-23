import { createContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Security, AuthCredentials } from '@Constants/Core';
import { User, UserKeys } from 'models/User';
import { AuthContextProviderProps } from './AuthProvider.props';

import { usePostQuery } from '@Hooks/usePost/usePost';
import { AuthContextProps, AuthError } from './AuthContext.props';

const { VITE_BASE_API_URL, VITE_AUTH_LOGIN_URL, VITE_AUTH_LOGOUT_URL } = import.meta.env;

export const AuthContext = createContext<AuthContextProps>({
  user: {} as User,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  loading: false,
  error: {} as AuthError,
});

export const AuthProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem(Security.UserData);

    if (user) return JSON.parse(user);

    return null;
  });

  const {
    responseData: responseLogin,
    loading,
    post: loginPost,
    error,
  } = usePostQuery<User, User>(`${VITE_BASE_API_URL}${VITE_AUTH_LOGIN_URL}`, AuthCredentials);

  const { post: logoutPost } = usePostQuery(`${VITE_BASE_API_URL}${VITE_AUTH_LOGOUT_URL}`, AuthCredentials);

  useEffect(() => {
    const saveResponse = () => {
      if (!isEmpty(responseLogin) && UserKeys.Email in responseLogin && UserKeys.Id in responseLogin) {
        const userData = responseLogin as User;
        setUser(userData);
        localStorage.setItem(Security.UserData, JSON.stringify(userData));
      }
    };
    saveResponse();
  }, [responseLogin]);

  const login = (credentials: User) => {
    loginPost(credentials);
  };

  const logout = () => {
    logoutPost();
    setUser(null);
    localStorage.removeItem(Security.UserData);
  };

  return <AuthContext.Provider value={{ user, login, logout, loading, error }}>{children}</AuthContext.Provider>;
};
