import React, { useEffect, useState } from 'react';
import { RootState } from '@/stores/index';
import LinkRecommandView from './LinkRecommand.view';
import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Seoul');
import { ColDef, PageChangeParams, ValueFormatterParams } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { LinkRankRequest, LinkStep1Success } from '@/stores/link';
import * as T from './LinkRecommand.type';

const LIMIT = 100;

const LinkRecommandContainer = ({ rows }: T.LinkRecommandProps) => {
  const { recommand, nidaLink } = useSelector((state: RootState) => state.link);

  const dispatch = useDispatch();

  const [state, setState] = useState({ isLoading: false });

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
        dispatch(LinkStep1Success(rows));
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

  const onClickStatus = (val: string) => {
    console.log(val);
  };

  useEffect(() => {
    loadMoreItems(1);
  }, []);

  return (
    <LinkRecommandView
      isLoading={state.isLoading}
      rows={recommand.items}
      total={recommand.total}
      onPropPageChange={onPageChange}
      onClickStatus={onClickStatus}
    />
  );
};

export default LinkRecommandContainer;
