export interface LinkRankProps {
  rows?: { [k: string]: any }[];
}

export interface LinkRankViewProps {
  rows: { [k: string]: any }[];
  total: number;
  onPropPageChange: any;
  isLoading: true;
}
