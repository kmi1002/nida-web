export interface AccordionArticleProps {
  categories?: { [k: string]: any }[];
  rows: { [k: string]: any }[];
}

export interface AccordionArticleViewProps extends AccordionArticleProps {}
