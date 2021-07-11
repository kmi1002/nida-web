export interface LinkRecommandProps {
  rows?: { [k: string]: any }[];
}

export interface LinkRecommandViewProps {
  rows: { [k: string]: any }[];
  total: number;
  onPropPageChange: any;
  isLoading: true;
  onClickStatus: (val: string) => void;
}
