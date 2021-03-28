import api from '@/services/api';
import React, {
  FC,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { AuthContextProps, DataUserProps } from './props';

const initialValue = {} as AuthContextProps;

const AuthContext = createContext(initialValue);

const AuthProvider: FC = props => {
  const { children } = props;
  const [dataUser, setDataUser] = useState<DataUserProps>({
    avatar_url: '',
    name: '',
  });

  const signIn = useCallback(async (user: string) => {
    const response = await api.get<DataUserProps>(`/${user}`);

    const userData: DataUserProps = {
      avatar_url: response.data.avatar_url,
      name: response.data.name,
    };

    setDataUser(userData);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, dataUser }}>
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
