import { LinkGeneratorStatus } from '@/types/linkTypes';

export interface LinkGeneratorStep1Props {
  sourceLink?: string;
  onPropNext: () => void;
}

export interface LinkGeneratorStep1ViewProps {
  sourceLink?: string;
  disabled: boolean;
  status: LinkGeneratorStatus;
  onPropCheck: (value: string) => void;
  onPropEnter: (value: string) => void;
}
