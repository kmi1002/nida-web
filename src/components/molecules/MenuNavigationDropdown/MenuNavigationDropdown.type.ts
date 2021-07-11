export interface MenuNavigationDropdownProps {
  items: [
    { categoryTitle: string; categoryItems: [{ title: string; url: string; icon?: string; disabled?: boolean }] },
  ];
}
