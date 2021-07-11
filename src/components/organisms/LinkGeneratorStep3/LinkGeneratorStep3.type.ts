import { LinkGeneratorStatus } from '@/types/linkTypes';

export interface LinkGeneratorStep3Props {
  targetLink?: string;
  sourceLink?: string;
  onPropPrev: () => void;
  onPropNext: () => void;
}

export interface LinkGeneratorStep3ViewProps {
  nidaLink: string;
  targetLink: string;
  disabled: boolean;
  status: LinkGeneratorStatus;
  onPropCheck: (value: string) => void;
  onPropBack: () => void;
  onPropEnter: (value: string) => void;
}
