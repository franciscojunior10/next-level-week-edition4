import React, { FC } from 'react';

import { useRouter } from 'next/router';

import styles from '@/styles/components/Login.module.css';

const Login: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img
        className={styles.imageBackground}
        src="/images/simbolo.svg"
        alt="Simbolo"
      />
      <div className={styles.content}>
        <img className={styles.imageLogo} src="/images/logo.svg" alt="Logo" />
        <h1>Bem-vindo</h1>
        <div className={styles.containerGithub}>
          <img
            className={styles.imageLogoGithub}
            src="/images/logo_github.svg"
            alt="Logo github"
          />
          <span>
            Faça login com seu Github <br /> para começar
          </span>
        </div>
        <div className={styles.containerInput}>
          <input type="text" placeholder="Digite seu username" />
          <button type="submit" onClick={() => router.push('/details')}>
            <img src="/images/seta.svg" alt="Icone" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
