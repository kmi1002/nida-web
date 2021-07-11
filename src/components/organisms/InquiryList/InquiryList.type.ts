export interface InquiryListProps {
  moreItemsLoading: boolean;
  rows: { [k: string]: any }[];
  onStatus: (val: string) => void;
  onLink: () => void;
  onEdit: () => void;
  onPublic: () => void;
  onReport: () => void;
}
