import React from 'react';
import { TextField } from '@material-ui/core';
import { InputTextProps } from './InputText.type';
import { useStyles } from './InputText.style';

const InputText = ({ label, readyOnly, ...props }: InputTextProps) => {
  const style = useStyles();

  const makeTextId = () => {
    return `textField-${label}`;
  };

  const makeTextName = () => {
    return `textField-${label}`;
  };

  return (
    <TextField
      id={makeTextId()}
      name={makeTextName()}
      label={label}
      className={readyOnly ? style.readOnly : ''}
      InputProps={{
        readOnly: readyOnly,
      }}
      {...props}
    />
  );
};

export default InputText;
