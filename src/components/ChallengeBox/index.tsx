import React, { FC } from 'react';

import styles from '@/styles/components/ChallengeBox.module.css';
import Button from '@/components/Button';

const ChallengeBox: FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxcontainer}>
      {hasActiveChallenge ? (
        <div className={styles.challeneActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="/icons/body.svg" alt="Body" />
            <strong>Novo ddesafio</strong>
            <p>Levente e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <Button type="button" className={styles.challengeFailedButton}>
              Falhei
            </Button>
            <Button type="button" className={styles.challengeSuccesedButton}>
              Completei
            </Button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
