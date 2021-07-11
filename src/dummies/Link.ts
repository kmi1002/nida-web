export const LinkRank = {
  start: 1,
  count: 5,
  list: [
    { id: 1, link_raw: '테스트1.com', create_date: '2020-01-01 00:00:00', hit: 100 },
    { id: 2, link_raw: '테스트2.com', create_date: '2020-01-02 00:00:00', hit: 1000 },
    { id: 3, link_raw: '테스트3.com', create_date: '2020-01-03 00:00:00', hit: 10000 },
    { id: 4, link_raw: '테스트4.com', create_date: '2020-01-04 00:00:00', hit: 100000 },
    { id: 5, link_raw: '테스트5.com', create_date: '2020-01-05 00:00:00', hit: 1000000 },
  ],
};

export const LinkRcommand = {
  start: 1,
  count: 5,
  list: [
    { id: 1, recommend_url: '테스트1.com', domain_level_name: '베이직', status: '현재선택' },
    { id: 2, recommend_url: '테스트2.com', domain_level_name: '플러스', status: '신청하기' },
    { id: 3, recommend_url: '테스트3.com', domain_level_name: '프리미엄', status: '신청하기' },
    { id: 4, recommend_url: '테스트4.com', domain_level_name: '프리미엄', status: '사용중' },
    { id: 5, recommend_url: '테스트5.com', domain_level_name: '프리미엄', status: '테스트신청' },
  ],
};
