import React, { FC } from 'react';
import ExperienceBar from '@/components/ExperienceBar';
import Profile from '@/components/Profile';
import CompletedChallenge from '@/components/CompletedChallenge';
import styles from '@/styles/pages/Home.module.css';
import CountDown from '@/components/CountDown';

import Head from 'next/head';
import ChallengeBox from '@/components/ChallengeBox';

import CountDownProvider from '@/hooks/countDownContext';
import ChallengesProvider from '@/hooks/challengesContext';
import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: FC<HomeProps> = ({
  challengesCompleted,
  level,
  currentExperience,
}) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountDownProvider>
        <main className={styles.container}>
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
        </main>
      </CountDownProvider>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
