export interface SupportMultiProps {
  value: number;
  tabs: { [k: string]: any }[];
  onPropChange: (value: number) => void;

  noticeItems: { [k: string]: any }[];
  faqCategories: { [k: string]: any }[];
  faqItems: { [k: string]: any }[];
}
