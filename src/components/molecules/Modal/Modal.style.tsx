import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { Fragment } from 'react';

export const Container = styled(Modal)``;

export const Tmp = styled(Fragment)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;
