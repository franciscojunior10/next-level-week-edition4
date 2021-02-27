import React, { FC } from 'react';

import styles from '@/styles/components/CountDown.module.css';
import Button from '../Button';

const CountDown: FC = () => {
  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <Button type="button">Iniciar um ciclo</Button>
    </div>
  );
};

export default CountDown;
