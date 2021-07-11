import styled from 'styled-components';
import { Container, Typography } from '@material-ui/core';

export const Footer = styled.footer`
  background-color: rgb(38, 38, 38);
  padding: 48px 30px 30px;
`;

export const FooterContainer = styled(Container)``;
export const FooterNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  a {
    color: #fff;
    text-decoration: none;

    &:not(:first-child):before {
      content: '|';
      margin: 0 16px;
    }
  }
`;

export const FooterRow = styled.div``;

export const FooterInfo = styled(Typography)`
  color: #fff;
  font-size: 0.8em;

  b {
  }

  span:not(:first-child):before {
    content: '|';
    margin: 0 8px;
  }
`;

export const Copyright = styled(Typography)`
  margin-top: 48px !important; // 이거 수정해야함
  color: #fff;
  text-align: center;
`;
