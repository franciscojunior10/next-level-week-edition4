import React, { FC, FormEvent, useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import styles from '@/styles/components/Login.module.css';

import { useAuth } from '@/hooks/authContext';

const Login: FC = () => {
  const router = useRouter();

  const [nameUser, setNameUser] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (event: FormEvent) => {
      try {
        event.preventDefault();
        await signIn(nameUser);
        router.push('/details');
      } catch (error) {
        alert('Dados não conferem!');
      }
    },
    [nameUser, router, signIn],
  );

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
          <form onSubmit={handleSignIn} className={styles.containerForm}>
            <input
              type="text"
              required
              placeholder="Digite seu username"
              value={nameUser}
              onChange={event => {
                setNameUser(event.target.value);
              }}
            />
            <button type="submit" className={styles.buttonSubmit}>
              <img src="/images/seta.svg" alt="Icone" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
