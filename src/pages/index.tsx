import React, { FC } from 'react';
import ExperienceBar from '@/components/ExperienceBar';
import Profile from '@/components/Profile';
import CompletedChallenge from '@/components/CompletedChallenge';
import styles from '@/styles/pages/Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenge />
        </div>
        <div />
      </section>
    </div>
  );
};

export default Home;
