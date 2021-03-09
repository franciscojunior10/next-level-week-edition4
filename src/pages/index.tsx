import React, { FC } from 'react';
import ExperienceBar from '@/components/ExperienceBar';
import Profile from '@/components/Profile';
import CompletedChallenge from '@/components/CompletedChallenge';
import styles from '@/styles/pages/Home.module.css';
import CountDown from '@/components/CountDown';

import Head from 'next/head';
import ChallengeBox from '@/components/ChallengeBox';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
};

export default Home;
