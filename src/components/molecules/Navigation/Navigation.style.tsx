import styled from 'styled-components';
import { NavigationProps } from './Navigation.type';

export const Container = styled.nav<NavigationProps>`
  display: flex;
  flex-direction: ${props => (props.direction === 'vertical' ? 'column' : undefined)};
  padding: 16px;

  > div + div {
    margin-left: ${props => (props.direction === 'horizontal' ? `48px` : undefined)};
    margin-top: ${props => (props.direction !== 'horizontal' ? `24px` : undefined)};
  }
`;
