import React, { FC } from 'react';
import ExperienceBar from '@/components/ExperienceBar';
import Profile from '@/components/Profile';
import styles from '@/styles/pages/Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div />
      </section>
    </div>
  );
};

export default Home;
