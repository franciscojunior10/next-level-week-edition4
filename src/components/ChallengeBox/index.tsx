import React, { FC } from 'react';

import styles from '@/styles/components/ChallengeBox.module.css';
import Button from '@/components/Button';

import { useChallenges } from '@/hooks/challengesContext';

const ChallengeBox: FC = () => {
  const { activeChallenge, resetChallenge } = useChallenges();

  return (
    <div className={styles.challengeBoxcontainer}>
      {activeChallenge ? (
        <div className={styles.challeneActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`/icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
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
