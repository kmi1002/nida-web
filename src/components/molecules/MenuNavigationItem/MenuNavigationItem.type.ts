import { MenuNavigationDropdownProps } from '../MenuNavigationDropdown/MenuNavigationDropdown.type';

export interface StyleContainerProps {
  onMouseOver?: () => void;
  onFocus?: () => void;
  onMouseLeave?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
}

export interface MenuNavigationItemProps extends StyleContainerProps {
  title: string;
  items?: [
    { categoryTitle: string; categoryItems: [{ title: string; url: string; icon?: string; disabled?: boolean }] },
  ];
  selected?: boolean;
}
