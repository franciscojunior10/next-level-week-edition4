import React, { FC, memo, useMemo } from 'react';

import styles from '@/styles/components/CountDown.module.css';
import stylesButton from '@/styles/components/Button.module.css';

import { useCountDown } from '@/hooks/countDownContext';

import Button from '../Button';

const CountDown: FC = () => {
  const {
    minutes,
    seconds,
    isActive,
    resetCountDown,
    startCountDown,
    hasFinished,
  } = useCountDown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const buttonShow = useMemo(() => {
    if (isActive) {
      return (
        <Button
          className={`${stylesButton.countDownButton} ${stylesButton.countDownButtonActive}`}
          type="button"
          onClick={resetCountDown}
        >
          Abondonar ciclo
          <img src="/icons/close.svg" alt="Abondonar Ciclo" />
        </Button>
      );
    }
    return (
      <Button
        type="button"
        className={stylesButton.countDownButton}
        onClick={startCountDown}
      >
        Iniciar um ciclo
        <img src="/icons/play_arrow.svg" alt="Inciar Ciclo" />
      </Button>
    );
  }, [resetCountDown, startCountDown, isActive]);

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
          <img src="/icons/check_circle.svg" alt="Ciclo Encerrado" />
        </Button>
      ) : (
        <>{buttonShow}</>
      )}
    </div>
  );
};

export default memo(CountDown);
