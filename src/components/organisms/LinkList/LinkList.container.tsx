import React, { useEffect, useState } from 'react';
import LinkListView from './LinkList.view';
import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Seoul');
import { ColDef, PageChangeParams, ValueFormatterParams } from '@material-ui/data-grid';

const ENDPOINT = 'https://api.thecatapi.com/v1/images/search';
const LIMIT = 100;

const LinkListContainer = () => {
  const [state, setState] = useState({ isLoading: false, items: [] });

  const levels = ['베이직', '플러스', '프리미엄'];
  const status = ['현재선택', '신청하기', '사용중', '테스트신청'];

  const handlePageChange = ({ page, pageCount, pageSize, rowCount }: PageChangeParams) => {
    if (page === pageCount && page * pageSize >= rowCount) {
      loadMoreItems(rowCount / LIMIT + 1);
    }
  };

  const loadMoreItems = async startIndex => {
    setState({ ...state, isLoading: true });

    const response = await fetch(`${ENDPOINT}?limit=${LIMIT}&page=${startIndex / LIMIT}`);
    const data = await response.json();
    const items = data.map(({ id, url }, index) => ({
      id: index,
      url,
      level: levels[Math.floor(Math.random() * levels.length)],
      status: status[Math.floor(Math.random() * status.length)],
      createdAt: Date.now(),
      hit: Math.floor(Math.random() * 10000 + 10),
    }));

    setState({
      ...state,
      isLoading: false,
      items: state.items.concat(items),
    });
  };

  const onStatus = (val: string) => {
    console.log(val);
  };

  const onLink = () => {
    console.log('Link');
  };

  const onEdit = () => {
    console.log('Edit');
  };

  const onPublic = () => {
    console.log('Public');
  };

  const onReport = () => {
    console.log('Report');
  };
  useEffect(() => {
    loadMoreItems(1);
  }, []);

  return (
    <LinkListView
      moreItemsLoading={state.moreItemsLoading}
      rows={state.items}
      handlePageChange={handlePageChange}
      onStatus={onStatus}
      onLink={onLink}
      onEdit={onEdit}
      onPublic={onPublic}
      onReport={onReport}
    />
  );
};

export default LinkListContainer;
