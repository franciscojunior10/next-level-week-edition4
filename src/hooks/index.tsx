import React, { FC } from 'react';

import AuthProvider from './authContext';

const AppProvider: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
