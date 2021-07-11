import React, { useEffect, useState } from 'react';
import BillingListView from './BillingList.view';
import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Seoul');
import { ColDef, PageChangeParams, ValueFormatterParams } from '@material-ui/data-grid';

const ENDPOINT = 'https://api.thecatapi.com/v1/images/search';
const LIMIT = 100;

const BillingListContainer = () => {
  const [state, setState] = useState({ isLoading: false, items: [] });

  const levels = ['베이직', '플러스', '프리미엄'];
  const paymentTypes = ['card', 'bank'];
  const serviceStatus = ['사용', '해지'];

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
      paymentType: paymentTypes[Math.floor(Math.random() * paymentTypes.length)],
      serviceStatus: serviceStatus[Math.floor(Math.random() * serviceStatus.length)],
      price: Math.floor(Math.random() * 9000 + 9000),
      createdAt: Date.now(),
      expireAt: Date.now(),
    }));

    setState({
      ...state,
      isLoading: false,
      items: state.items.concat(items),
    });
  };

  const onExtend = () => {
    console.log('Extend');
  };

  useEffect(() => {
    loadMoreItems(1);
  }, []);

  return (
    <BillingListView
      moreItemsLoading={state.moreItemsLoading}
      rows={state.items}
      handlePageChange={handlePageChange}
      onExtend={onExtend}
    />
  );
};

export default BillingListContainer;
