import React from 'react';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import InputButton from '@/atoms/InputButton';
import * as T from './LinkRecommand.type';
import { useStyles } from '../LinkRank/LinkRank.style';

const LinkRecommandView = ({ isLoading, rows, total, onPropPageChange, onClickStatus }: T.LinkRecommandProps) => {
  const style = useStyles();

  const columns = [
    {
      field: 'recommend_url',
      headerName: '링크',
      flex: 1,
    },
    {
      field: 'domain_level_name',
      headerName: '레벨',
      width: 150,
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
              disabled={(params.value as string) === '현재선택'}
              onClick={() => onClickStatus(params.value as string)}
            >
              {params.value}
            </InputButton>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div>
        <p>신청 가능한 다른 도메인을 선택해보세요!</p>
        <p>
          수백 종의 다양한 도메인을 이용하여 최상의 URL 링크 조합을 만들어 보세요!
          <br />
          현재 상태 (비로그인) 에서도 모든 URL 을 발급/테스트 신청할 수 있습니다.
        </p>
        <InputButton type="button">회원 레벨 제도에 대하여</InputButton>
      </div>
      <div className={style.wrapper}>
        <div className={style.table}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowCount={total}
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

export default LinkRecommandView;
