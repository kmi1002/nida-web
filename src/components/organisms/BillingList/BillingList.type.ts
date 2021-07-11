export interface BillingListProps {
  moreItemsLoading: boolean;
  rows: { [k: string]: any }[];
  onExtend: () => void;
}
