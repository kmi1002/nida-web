import React from 'react';
import SimpleArticleView from './SimpleArticle.view';

import * as T from './SimpleArticle.type';

const SimpleArticleContainer = ({ html }: T.SimpleArticleProps) => {
  return <SimpleArticleView html={html} />;
};

export default SimpleArticleContainer;
