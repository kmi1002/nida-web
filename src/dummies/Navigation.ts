export const MenuNavigation = [
  {
    title: 'title1',
  },
  {
    title: 'title2',
    items: [
      {
        categoryTitle: 'category2-1',
        categoryItems: [
          { title: 'title2-1-1', url: 'link1', disabled: true },
          { title: 'title2-1-2', url: 'link1' },
        ],
      },
      { categoryTitle: 'category2-2', categoryItems: [{ title: 'title2-2-1', url: 'link1' }] },
    ],
  },
  {
    title: 'title3',
    items: [
      {
        categoryTitle: 'category3-1',
        categoryItems: [
          { title: 'title3-1-1', url: 'link1', disabled: true },
          { title: 'title3-1-2', url: 'link1' },
        ],
      },
    ],
  },
];

export const FooterNavigation = [
  {
    title: '소개',
    url: '#',
  },
  {
    title: '서비스 이용약관',
    url: '#',
  },
  {
    title: '개인정보 취급방침',
    url: '#',
  },
  {
    title: '고객센터',
    url: '#',
  },
];

export const Navigation = [
  {
    title: '링크1',
    url: '#',
    icon: null,
    items: [
      {
        title: '링크1-1',
        url: '#',
        icon: null,
        items: [
          { title: '링크1-1-1', url: '#', icon: null },
          { title: '링크1-1-2', url: '#', icon: null },
        ],
      },
      { title: '링크1-2', url: '#', icon: null },
    ],
  },
  {
    title: '링크2',
    url: '#',
    icon: null,
  },
  {
    title: '링크3',
    url: '#',
    icon: null,
  },
];
