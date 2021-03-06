/* eslint-disable react/button-has-type */
import React, { FC, memo } from 'react';

import { ButtonProps } from './props';

const Button: FC<ButtonProps> = props => {
  const { type, children, ...rest } = props;

  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default memo(Button);
