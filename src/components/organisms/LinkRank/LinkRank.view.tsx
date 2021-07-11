import React from 'react';
import * as T from './LinkRank.type';
import { useStyles } from './LinkRank.style';
import { ColParams, DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import moment from 'moment-timezone';

const LinkRankView = ({ isLoading, rows, total, onPropPageChange }: T.LinkRankViewProps) => {
  const style = useStyles();

  const columns = [
    {
      field: 'link_raw',
      headerName: '링크',
      flex: 1,
    },
    {
      field: 'create_date',
      headerName: '생성일',
      width: 150,
      type: 'dateTime',
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
    },
    {
      field: 'hit',
      headerName: '조회수',
      width: 100,
      valueFormatter: (params: ValueFormatterParams) =>
        (params.value as string).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.table}>
        {rows ? (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowCount={total}
            disableColumnMenu
            // rowsPerPageOptions={[5, 10, 20]}
            // paginationMode="server"
            loading={isLoading}
            onPageChange={onPropPageChange}
            disableClickEventBubbling
          />
        ) : (
          <div>없네</div>
        )}
      </div>
    </div>
  );
};

export default LinkRankView;
