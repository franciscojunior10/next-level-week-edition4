import React, { FC } from 'react';

import styles from '@/styles/components/Profile.module.css';

const Profile: FC = () => {
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
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
