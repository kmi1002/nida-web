import { ModalProps as OriginModalProps } from '@material-ui/core/Modal';

export type ModalProps = Omit<OriginModalProps, ''> & {
  children: any;
  onPropClose: () => void;
};
