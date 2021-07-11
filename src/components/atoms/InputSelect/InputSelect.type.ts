import { SelectProps as OriginSelectProps } from '@material-ui/core/Select';

export type InputSelectProps = Omit<OriginSelectProps, 'input'> & {
  label?: string;
  options: { [k: string]: any }[];
  placeholder?: string;
  selectedValue?: any;
  helperText?: string;

  required?: boolean;
  error?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
  fullWidth?: boolean;
  size?: 'small' | 'medium';

  onChange: (value: string) => void;
};
