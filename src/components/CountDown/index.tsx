import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  memo,
  useMemo,
} from 'react';

import styles from '@/styles/components/CountDown.module.css';
import stylesButton from '@/styles/components/Button.module.css';

import Button from '../Button';

let countDownTimeout: NodeJS.Timeout;

const CountDown: FC = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleStartCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleResetCountDown = useCallback(() => {
    clearTimeout(countDownTimeout);
    setIsActive(!isActive);
    setTime(0.1 * 60);
  }, [isActive]);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  const buttonShow = useMemo(() => {
    if (isActive) {
      return (
        <Button
          className={`${stylesButton.countDownButton} ${stylesButton.countDownButtonActive}`}
          type="button"
          onClick={handleResetCountDown}
        >
          Abondonar ciclo
        </Button>
      );
    }
    return (
      <Button
        type="button"
        className={stylesButton.countDownButton}
        onClick={handleStartCountDown}
      >
        Iniciar um ciclo
      </Button>
    );
  }, [handleResetCountDown, handleStartCountDown, isActive]);

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <Button disabled className={stylesButton.countDownButton}>
          Ciclo encerrado
        </Button>
      ) : (
        <>{buttonShow}</>
      )}
    </div>
  );
};

export default memo(CountDown);
