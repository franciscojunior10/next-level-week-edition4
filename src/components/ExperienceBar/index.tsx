import React, { FC, memo } from 'react';

import { useChallenges } from '@/hooks/challengesContext';
import styles from '@/styles/components/ExperienceBar.module.css';

const ExperienceBar: FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percenttoNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percenttoNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percenttoNextLevel}%` }}
        >
          {currentExperience} px
        </span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  );
};

export default memo(ExperienceBar);
