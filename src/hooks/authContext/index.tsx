import api from '@/services/api';
import React, {
  FC,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { AuthContextProps, AuthState, UserProps } from './props';

const initialValue = {} as AuthContextProps;

const AuthContext = createContext(initialValue);

const AuthProvider: FC = props => {
  const { children } = props;
  const [data, setData] = useState<AuthState>(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('@Movit:user');

      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (user: string) => {
    const response = await api.get<UserProps>(`/${user}`);

    localStorage.setItem('@Movit:user', JSON.stringify(response.data));

    setData({ user: response.data });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Movit:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context || context === initialValue) {
    throw new Error('useAuth must be used within a AuthContext');
  }

  return context;
}

export default AuthProvider;
