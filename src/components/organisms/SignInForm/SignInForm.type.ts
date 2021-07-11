import { AuthStatus } from '@/types/linkTypes';
import { ProviderType } from '@/stores/auth/type';

export interface SignInFormViewProps {
  emailStatus: AuthStatus;
  passwordStatus: AuthStatus;
  onPropSns: (provider: ProviderType) => void;
  onPropEmailCheck: (value: string) => void;
  onPropPasswordCheck: (value: string) => void;
  onPropProcess: () => void;
}
