import React, { useState } from 'react';
import MenuNavigationItemView from './MenuNavigationItem.view';

import * as T from './MenuNavigationItem.type';

const MenuNavigationItemContainer = ({ title, items }: T.MenuNavigationItemProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <MenuNavigationItemView
      onMouseOver={() => setSelected(true)}
      onFocus={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      onBlur={() => setSelected(false)}
      onClick={() => setSelected(!selected)}
      selected={selected}
      title={title}
      items={items}
    />
  );
};

export default MenuNavigationItemContainer;
