export interface LinkGeneratorStep2Props {
  sourceLink?: string;
  onPropPrev: () => void;
  onPropNext: () => void;
}

export interface LinkGeneratorStep2ViewProps {
  nidaLink: string;
  onPropBack: () => void;
  onPropEnter: () => void;
}
