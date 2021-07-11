import React from 'react';
import * as S from './SimpleArticle.style';
import * as T from './SimpleArticle.type';
import { Typography } from '@material-ui/core';

const SimpleArticleView = ({ html }: T.SimpleArticleViewProps) => {
  return <>{html}</>;
};

export default SimpleArticleView;
