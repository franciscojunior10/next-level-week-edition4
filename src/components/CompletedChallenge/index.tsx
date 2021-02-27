import React, { FC } from 'react';

import styles from '@/styles/components/CompletedChallenge.module.css';

const CompletedChallenge: FC = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
};

export default CompletedChallenge;
