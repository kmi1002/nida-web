import styled from 'styled-components';
import * as T from './Avatar.types';

const sizeProps = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '30px';

    case 'large':
      return '100px';

    default:
    case 'medium':
      return '50px';
  }
};

export const Wrapper = styled.div<T.StyleWrapperProps>`
  width: ${props => sizeProps(props.size || 'medium')}};
  height: ${props => sizeProps(props.size || 'medium')}};
`;

export const Picture = styled.picture`
  display: block;
  height: 100%;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
