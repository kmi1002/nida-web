import React from 'react';
import MenuNavigationView from './MenuNavigation.view';

import * as T from './MenuNavigation.type';

const MenuNavigationContainer = ({ items2 }: T.MenuNavigationProps) => {
  return <MenuNavigationView items2={items2} />;
};

export default MenuNavigationContainer;
