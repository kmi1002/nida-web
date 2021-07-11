import { AuthStatus } from '@/types/linkTypes';

export interface SignUpFormViewProps {
  nameStatus: AuthStatus;
  emailStatus: AuthStatus;
  passwordStatus: AuthStatus;
  onPropNameCheck: (value: string) => void;
  onPropEmailCheck: (value: string) => void;
  onPropPasswordCheck: (value: string) => void;
  onPropProcess: () => void;
  onPropAgree: (value: boolean) => void;
}
