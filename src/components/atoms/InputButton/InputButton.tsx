import React from 'react';
import { Button } from '@material-ui/core';
import { InputButtonProps } from './InputButton.type';

const InputButton = ({ children, ...props }: InputButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default InputButton;
