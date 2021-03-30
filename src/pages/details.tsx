import React, { FC } from 'react';
import ChallengesProvider from '@/hooks/challengesContext';

import ExperienceBar from '@/components/ExperienceBar';
import Profile from '@/components/Profile';
import CompletedChallenge from '@/components/CompletedChallenge';
import styles from '@/styles/pages/Home.module.css';
import CountDown from '@/components/CountDown';

import { GetServerSideProps } from 'next';

import SideBar from '@/components/SideBar';

import Head from 'next/head';
import ChallengeBox from '@/components/ChallengeBox';

import CountDownProvider from '@/hooks/countDownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Details: FC<HomeProps> = ({
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
        <div className={styles.content}>
          <SideBar isActiveIconHome isActiveIconAward={false} />
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
        </div>
      </CountDownProvider>
    </ChallengesProvider>
  );
};

export default Details;

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
