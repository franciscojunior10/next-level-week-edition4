import React, {
  FC,
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react';

import challenges from 'challenges.json';

import { ChallengeContextProps } from './props';

const initialValue = {} as ChallengeContextProps;

export const ChallengesContext = createContext(initialValue);

const ChallengesProvider: FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperince, setCurrentExperince] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setactiveChallenge] = useState(null);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];
    setactiveChallenge(challenge);
  }, []);

  const resetChallenge = useCallback(() => {
    setactiveChallenge(null);
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperince + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperince(finalExperience);
    setactiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperince,
    experienceToNextLevel,
    levelUp,
  ]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperince,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        levelUp,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
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
