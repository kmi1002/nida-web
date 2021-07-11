import React from 'react';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import moment from 'moment-timezone';
import { IconButton } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import LinkIcon from '@material-ui/icons/Link';
import InputButton from '@/atoms/InputButton';

import * as T from './InquiryDetail.type';
import { useStyles } from '../LinkRank/LinkRank.style';

const InquiryDetailView = ({ isLoading, rows, onStatus, onLink, onEdit, onPublic, onReport }: T.LinkRecommandProps) => {
  const style = useStyles();

  const columns = [
    {
      field: 'url',
      headerName: '링크',
      flex: 1,
    },
    {
      field: 'level',
      headerName: '레벨',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'createdAt',
      headerName: '생성일',
      width: 150,
      type: 'dateTime',
      valueFormatter: (params: ValueFormatterParams) => moment(params.value as number).format('YYYY-mm-DD'),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'hit',
      headerName: '조회수',
      width: 100,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'status',
      headerName: '상태',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: ValueFormatterParams) => (
        <div>
          {(params.value as string) === '사용중' ? (
            '사용중'
          ) : (
            <InputButton
              type="button"
              variant="contained"
              color="primary"
              onClick={() => onStatus(params.value as string)}
            >
              {params.value}
            </InputButton>
          )}
        </div>
      ),
    },
    {
      field: 'options',
      headerName: '기능',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params: ValueFormatterParams) => (
        <>
          <IconButton onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onLink}>
            <LinkIcon />
          </IconButton>
          <IconButton onClick={onPublic}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={onReport}>
            <AssessmentIcon />
          </IconButton>
        </>
      ),
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

export default InquiryDetailView;
