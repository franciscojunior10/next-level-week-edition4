import React, { FC, memo } from 'react';

import { useChallenges } from '@/hooks/challengesContext';
import styles from '@/styles/components/Profile.module.css';

const Profile: FC = () => {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/franciscojunior10.png"
        alt="Francisco Júnior"
      />
      <div>
        <strong>Francisco Júnior</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default memo(Profile);
