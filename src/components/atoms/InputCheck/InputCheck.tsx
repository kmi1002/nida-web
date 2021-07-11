import React from 'react';
import { FormControl, FormLabel, FormControlLabel, FormHelperText, FormGroup, Checkbox } from '@material-ui/core';
import { InputCheckProps } from './InputCheck.type';

const InputCheck = ({ required, error, label, helperText, items, onChange, ...props }: InputCheckProps) => {
  return (
    <FormControl component="fieldset" required={required} error={error}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup>
        {items.map(({ value, label, icon, checkedIcon, checked, disabled }) => (
          <FormControlLabel
            key={value}
            control={
              <Checkbox
                name={label}
                icon={icon}
                checkedIcon={checkedIcon}
                checked={checked}
                disabled={disabled}
                onChange={event => onChange && onChange(event.target.name, event.target.checked)}
                {...props}
              />
            }
            label={label}
          />
        ))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputCheck;
