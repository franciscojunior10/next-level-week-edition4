import React, {
  FC,
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import { CountDownContextProps } from './props';
import { useChallenges } from '../challengesContext';

const initialValue = {} as CountDownContextProps;

export const CountDownContext = createContext(initialValue);

let countDownTimeout: NodeJS.Timeout;

const CountDownProvider: FC = ({ children }) => {
  const { startNewChallenge } = useChallenges();

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      startNewChallenge();
      setHasFinished(true);
      setIsActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, time]);

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountDown = useCallback(() => {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <CountDownContext.Provider
      value={{
        seconds,
        minutes,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};

export function useCountDown(): CountDownContextProps {
  const context = useContext(CountDownContext);

  if (!context || context === initialValue) {
    throw new Error('useChallenges must be used within a CountDownContext');
  }
  return context;
}

export default CountDownProvider;
