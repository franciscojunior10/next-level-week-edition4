/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, memo, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

import styles from '@/styles/components/SideBar.module.css';
import { useAuth } from '@/hooks/authContext';
import { SideBarProps } from './props';

const SideBar: FC<SideBarProps> = ({ isActiveIconHome, isActiveIconAward }) => {
  const routes = useRouter();

  const { signOut } = useAuth();

  const handlesignOut = useCallback(() => {
    routes.push('/');
    signOut();
  }, [routes, signOut]);

  const renderIconHome = useMemo(() => {
    if (isActiveIconHome) {
      return (
        <>
          <span className={styles.iconHomeActive} />
          <img
            className={styles.iconHome}
            src="/images/home_active.svg"
            alt="Home"
            onClick={() => routes.push('/details')}
          />
        </>
      );
    }
    return (
      <>
        <img
          className={styles.iconHome}
          src="/images/home_gray.svg"
          alt="Home"
          onClick={() => routes.push('/details')}
        />
      </>
    );
  }, [isActiveIconHome, routes]);

  const renderIconAward = useMemo(() => {
    if (isActiveIconAward) {
      return (
        <>
          <span className={styles.iconActiveAward} />
          <img
            className={styles.iconAward}
            src="/images/award_active.svg"
            alt="Home"
          />
        </>
      );
    }
    return (
      <>
        <img
          className={styles.iconAward}
          src="/images/award_gray.svg"
          alt="Home"
        />
      </>
    );
  }, [isActiveIconAward]);

  return (
    <div className={styles.container}>
      <img
        className={styles.iconLogo}
        src="/images/logo_menor.svg"
        alt="Logo menor"
      />
      <div className={styles.contentIconHome}>{renderIconHome}</div>

      <div className={styles.contentIconAward}>{renderIconAward}</div>

      <div className={styles.contentFooter}>
        <button type="button" onClick={handlesignOut}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default memo(SideBar);
