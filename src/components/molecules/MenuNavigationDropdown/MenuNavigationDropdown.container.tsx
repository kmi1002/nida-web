import React from 'react';
import MenuNavigationDropdownView from './MenuNavigationDropdown.view';

import * as T from './MenuNavigationDropdown.type';

const MenuNavigationDropdownContainer = ({ items }: T.MenuNavigationDropdownProps) => {
  return <MenuNavigationDropdownView items={items} />;
};

export default MenuNavigationDropdownContainer;
