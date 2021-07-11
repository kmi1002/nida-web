import styled from 'styled-components';

export const Container = styled.div``;

export const Logo = styled.div``;

export const TableStyles = styled.div`
  .MuiTableCell-root {
    display: flex;
    box-sizing: border-box;
    align-items: center;
  }

  .ReactVirtualized__Table__headerRow {
    display: flex;
    align-items: center;

    .MuiTableCell-head {
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .ReactVirtualized__Table__row {
    display: flex;
    align-items: center;
  }

  .ReactVirtualized__Table__headerColumn,
  .ReactVirtualized__Table__rowColumn {
    flex: 1;
  }
`;
