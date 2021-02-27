import React, { FC } from 'react';
import Head from 'next/head';
import ExperienceBar from '@/components/ExperienceBar';

const Home: FC = () => {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
};

export default Home;
