import React from 'react';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@material-ui/core';

import * as T from './InputSelect.type';

const InputSelect = ({
  label,
  options,
  placeholder,
  selectedValue,
  helperText,
  required,
  error,
  variant,
  fullWidth,
  size,
  onChange,
  ...props
}: T.InputSelectProps) => {
  const makeLabelId = () => {
    return `select-${label}-label`;
  };

  const makeSelectId = () => {
    return `select-${label}`;
  };

  return (
    <FormControl error={error} fullWidth={fullWidth} variant={variant} size={size} required={required}>
      {label && <InputLabel id={makeLabelId()}>{label}</InputLabel>}
      <Select
        labelId={makeLabelId()}
        id={makeSelectId()}
        label={label}
        value={selectedValue}
        onChange={e => onChange && onChange(`${e.target.value}`)}
        {...props}
      >
        {placeholder && <MenuItem disabled>{placeholder}</MenuItem>}
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputSelect;
