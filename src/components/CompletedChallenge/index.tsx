import React, { FC, memo } from 'react';

import { useChallenges } from '@/hooks/challengesContext';
import styles from '@/styles/components/CompletedChallenge.module.css';

const CompletedChallenge: FC = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default memo(CompletedChallenge);
