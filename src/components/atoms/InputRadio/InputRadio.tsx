import React from 'react';
import { FormControl, FormLabel, FormControlLabel, FormHelperText, RadioGroup, Radio } from '@material-ui/core';
import { InputRadioProps } from './InputRadio.type';

const InputRadio = ({
  label,
  items,
  selectedValue,
  helperText,
  required,
  error,
  onChange,
  horizontal,
  ...props
}: InputRadioProps) => {
  return (
    <FormControl component="fieldset" required={required} error={error}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup value={selectedValue} row={horizontal} onChange={e => onChange && onChange(`${e.target.value}`)}>
        {items.map(({ value, label, disabled, icon, checkedIcon }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              icon || checkedIcon ? (
                <Radio icon={icon} checkedIcon={checkedIcon} disabled={disabled} {...props} />
              ) : (
                <Radio disabled={disabled} {...props} />
              )
            }
            label={label}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputRadio;
