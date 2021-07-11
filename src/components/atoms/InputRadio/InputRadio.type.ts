import { RadioProps as OriginRadioProps } from '@material-ui/core/Radio';

export type InputRadioProps = Omit<OriginRadioProps, 'onChange'> & {
  label?: string;
  items: { [k: string]: any }[];
  selectedValue?: any;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  horizontal?: boolean;
};
