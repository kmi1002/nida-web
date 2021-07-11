import React, { useEffect } from 'react';
import AccordionArticleView from './AccordionArticle.view';

import * as T from './AccordionArticle.type';

const AccordionArticleContainer = ({ categories, rows }: T.AccordionArticleProps) => {
  return <AccordionArticleView categories={categories} rows={rows} />;
};

export default AccordionArticleContainer;
