/* eslint-disable react/button-has-type */
import React, { FC } from 'react';

import styles from '@/styles/components/Button.module.css';
import { ButtonProps } from './props';

const Button: FC<ButtonProps> = props => {
  const { type, children, ...rest } = props;

  return (
    <button type={type} {...rest} className={styles.countDownButton}>
      {children}
    </button>
  );
};

export default Button;
