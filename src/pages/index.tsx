import React, { FC } from 'react';

import Login from '@/components/pages/Login';

import AuthProvider from '@/hooks/authContext';

const Home: FC = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default Home;
