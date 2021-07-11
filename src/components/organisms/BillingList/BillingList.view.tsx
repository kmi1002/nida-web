import React from 'react';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import moment from 'moment-timezone';
import InputButton from '@/atoms/InputButton';
import * as T from './BillingList.type';
import { useStyles } from '../LinkRank/LinkRank.style';

const BillingListView = ({ isLoading, rows, onExtend }: T.BillingListProps) => {
  const style = useStyles();

  const currencyFormatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });

  const columns = [
    {
      field: 'level',
      headerName: '요금제',
      flex: 1,
      renderCell: (params: ValueFormatterParams) => (
        <>
          {params.value}
          <InputButton type="button" variant="contained" color="primary" onClick={onExtend}>
            자동결제 해지
          </InputButton>
        </>
      ),
    },
    {
      field: 'createdAt',
      headerName: '결제일',
      width: 150,
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'price',
      headerName: '결제금액',
      width: 150,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
      valueFormatter: ({ value }: ValueFormatterParams) => currencyFormatter.format(Number(value)),
    },
    {
      field: 'expireAt',
      headerName: '만료일',
      width: 150,
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'paymentType',
      headerName: '결제방법',
      width: 100,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'serviceStatus',
      headerName: '상태',
      width: 100,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.table2}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowCount={100}
            disableColumnMenu
            // rowsPerPageOptions={[5, 10, 20]}
            // paginationMode="server"
            loading={isLoading}
            // onPageChange={handlePageChange}
            disableClickEventBubbling
          />
        </div>
      </div>
    </div>
  );
};

export default BillingListView;
