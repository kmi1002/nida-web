export interface SupportSingleProps {
  value: number;
  tabs: { [k: string]: any }[];
  onPropChange: (value: number) => void;

  introduce: string;
  privacy: string;
  terms: string;
}
