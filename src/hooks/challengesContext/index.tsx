import React, {
  FC,
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import Cookies from 'js-cookie';

import LevelUpModal from '@/components/LevelUpModal';
import challenges from '../../../challenges.json';

import {
  ChallengeContextProps,
  ChallengesProviderProps,
  ChallengeProps,
} from './props';

const initialValue = {} as ChallengeContextProps;

export const ChallengesContext = createContext(initialValue);

const ChallengesProvider: FC<ChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const startNewChallenge = useCallback(() => {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge as ChallengeProps);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp`,
      });
    }
  }, []);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }, [level]);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setChallengesCompleted(challengesCompleted + 1);

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    levelUp,
  ]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        levelUp,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};

export function useChallenges(): ChallengeContextProps {
  const context = useContext(ChallengesContext);

  if (!context || context === initialValue) {
    throw new Error('useChallenges must be used within a ChallengesContext');
  }
  return context;
}

export default ChallengesProvider;
