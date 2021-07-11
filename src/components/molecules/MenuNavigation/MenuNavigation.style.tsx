import styled from 'styled-components';
import * as T from './MenuNavigation.type';

export const Container = styled.nav<T.StyleContainerProps>`
  display: flex;
  flex-direction: ${props => (props.direction === 'vertical' ? 'column' : undefined)};
  padding: 16px;

  a + a {
    margin-left: ${props => (props.direction === 'horizontal' ? `24px` : undefined)};
    margin-top: ${props => (props.direction !== 'horizontal' ? `24px` : undefined)};
  }
`;
