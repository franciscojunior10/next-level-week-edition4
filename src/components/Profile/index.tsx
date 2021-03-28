import React, { FC, memo } from 'react';

import { useChallenges } from '@/hooks/challengesContext';
import { useAuth } from '@/hooks/authContext';
import styles from '@/styles/components/Profile.module.css';

const Profile: FC = () => {
  const { level } = useChallenges();
  const { dataUser } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <img src={dataUser.avatar_url} alt={dataUser.name} />
      <div>
        <strong>{dataUser.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default memo(Profile);
