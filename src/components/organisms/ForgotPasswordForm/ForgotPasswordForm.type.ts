import { AuthStatus } from '@/types/linkTypes';

export interface ForgotPasswordFormViewProps {
  emailStatus: AuthStatus;
  onPropEmailCheck: (value: string) => void;
  onPropProcess: () => void;
}
