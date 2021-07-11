import { TextFieldProps as OriginTextFieldProps } from '@material-ui/core/TextField';

export type InputTextProps = Omit<OriginTextFieldProps, ''> & {
  readyOnly?: boolean;
};
