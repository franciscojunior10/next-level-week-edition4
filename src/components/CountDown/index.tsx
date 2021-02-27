import React, { FC, useState, useCallback, useEffect, memo } from 'react';

import styles from '@/styles/components/CountDown.module.css';
import Button from '../Button';

const CountDown: FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleStartCountDown = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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
      <Button type="button" onClick={handleStartCountDown}>
        Iniciar um ciclo
      </Button>
    </div>
  );
};

export default memo(CountDown);
