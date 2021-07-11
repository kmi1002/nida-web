import styled, { css } from 'styled-components';
import * as T from './ImageIcon.type';

export const Icon = styled.img<T.ImgProps>`
  background: transparent;

  ${props => {
    if (props.flipVertical) {
      return css`
        transform: rotateX(180deg);
      `;
    }

    if (props.flipHorizontal) {
      return css`
        transform: rotateY(180deg);
      `;
    }

    return css``;
  }}
`;
