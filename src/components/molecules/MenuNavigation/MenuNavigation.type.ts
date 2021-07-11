export interface MenuNavigationProps {
  items2: [
    {
      title: string;
      items?: [
        { categoryTitle: string; categoryItems: [{ title: string; url: string; icon?: string; disabled?: boolean }] },
      ];
    },
  ];
}
