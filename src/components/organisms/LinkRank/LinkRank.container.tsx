import React, { useEffect, useState } from 'react';
import LinkRankView from './LinkRank.view';
import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Seoul');
import { ColDef, PageChangeParams, ValueFormatterParams } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import { LinkRankSuccess, LinkRankRequest } from '@/stores/link';
import * as T from './LinkRank.type';

const LIMIT = 100;

const LinkRankContainer = ({ rows }: T.LinkRankProps) => {
  const [state, setState] = useState({ isLoading: false });
  const { ranks } = useSelector((state: RootState) => state.link);
  const dispatch = useDispatch();

  const onPageChange = ({ page, pageCount, pageSize, rowCount }: PageChangeParams) => {
    if (process.env.NODE_ENV !== 'storybook') {
      if (page === pageCount && page * pageSize >= rowCount) {
        loadMoreItems(rowCount / LIMIT + 1);
      }
    }
  };

  const loadMoreItems = async startIndex => {
    setState({ ...state, isLoading: true });

    if (process.env.NODE_ENV === 'storybook') {
      if (rows) {
        dispatch(LinkRankSuccess(rows));
      }
      setState({ ...state, isLoading: false });
    } else {
      dispatch(
        LinkRankRequest(
          () => {
            setState({ ...state, isLoading: false });
          },
          (error: any) => {
            setState({ ...state, isLoading: false });
          },
        ),
      );
    }
  };

  useEffect(() => {
    loadMoreItems(1);
  }, []);

  return (
    <LinkRankView isLoading={state.isLoading} rows={ranks.items} total={ranks.total} onPropPageChange={onPageChange} />
  );
};

export default LinkRankContainer;
