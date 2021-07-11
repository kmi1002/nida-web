import React from 'react';
import FooterView from './Footer.view';

import * as T from './Footer.type';

const FooterContainer = ({ menus }: T.FooterProps) => {
  return <FooterView menus={menus} />;
};

export default FooterContainer;
