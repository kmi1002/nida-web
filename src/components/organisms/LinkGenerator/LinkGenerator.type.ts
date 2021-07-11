export interface LinkGeneratorViewProps {
  step: number;
  onPrev: () => void;
  onNext: () => void;
  nidaLink: string;
  targetLink: string;
}

export interface LinkGeneratorProps {}
