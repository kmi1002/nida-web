import { CheckboxProps as OriginCheckboxProps } from '@material-ui/core/Checkbox';

export type InputCheckProps = Omit<OriginCheckboxProps, 'onChange'> & {
  label?: string;
  items: { [k: string]: any }[];
  helperText?: string;
  required?: boolean;
  error?: boolean;
  onChange?: (name: string, checked: boolean) => void;
};
