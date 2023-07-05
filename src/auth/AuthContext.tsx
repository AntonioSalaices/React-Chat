import { createContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { Func } from '@Utils/types';
import { Security } from '@Constans/securityConstants';
import { User, UserKeys } from 'models/User';
import { AuthContextProviderProps } from './AuthProvider.props';

import { usePostQuery } from '@Hooks/usePost/usePost';

const { VITE_BASE_API_URL, VITE_AUTH_LOGIN_URL, VITE_AUTH_LOGOUT_URL } = import.meta.env;

interface AuthContextProps {
  user: User | null;
  login: Func;
  logout: Func;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: {} as User,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  loading: false,
});

export const AuthProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem(Security.UserData);

    if (user) return JSON.parse(user);

    return null;
  });

  const {
    responseData: responseLogin,
    loading: isLoadingLogin,
    post: loginPost,
  } = usePostQuery<User, User>(`${VITE_BASE_API_URL}${VITE_AUTH_LOGIN_URL}`);

  const { post: logoutPost } = usePostQuery(`${VITE_BASE_API_URL}${VITE_AUTH_LOGOUT_URL}`);

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

  return (
    <AuthContext.Provider value={{ user, login, logout, loading: isLoadingLogin }}>{children}</AuthContext.Provider>
  );
};
