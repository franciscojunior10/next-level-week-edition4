/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react';

import styles from '@/styles/components/ChallengeBox.module.css';
import Button from '@/components/Button';

import { useChallenges } from '@/hooks/challengesContext';
import { useCountDown } from '@/hooks/countDownContext';

const ChallengeBox: FC = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();

  const { resetCountDown } = useCountDown();

  const handleChallengeSucceded = useCallback(() => {
    completeChallenge();
    resetCountDown();
  }, []);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountDown();
  }, []);

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
              onClick={handleChallengeFailed}
            >
              Falhei
            </Button>
            <Button
              type="button"
              className={styles.challengeSuccesedButton}
              onClick={handleChallengeSucceded}
            >
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
