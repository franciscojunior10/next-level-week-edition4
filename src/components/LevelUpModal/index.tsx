import React, { FC } from 'react';

import { useChallenges } from '@/hooks/challengesContext';

import Button from '@/components/Button';
import styles from '@/styles/components/LevelUpModal.module.css';

const LevelUpModal: FC = () => {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <Button onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </div>
    </div>
  );
};

export default LevelUpModal;
