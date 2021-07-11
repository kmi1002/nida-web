import { css } from 'styled-components';
import theme from '@/styles/theme';

export const sizeProps = (props: any) => css`
  ${props.width && `width: ${typeof props.width === 'string' ? props.width : `${props.width}px`}`};
  ${props.height && `height: ${typeof props.height === 'string' ? props.height : `${props.height}px`}`};
`;

export const marginProps = (props: any) => css`
  ${props.marginLeft &&
  `margin-left: ${typeof props.marginLeft === 'string' ? props.marginLeft : `${props.marginLeft}px`}`};
  ${props.marginRight &&
  `margin-right: ${typeof props.marginRight === 'string' ? props.marginRight : `${props.marginRight}px`}`};
  ${props.marginTop && `margin-top: ${typeof props.marginTop === 'string' ? props.marginTop : `${props.marginTop}px`}`};
  ${props.marginBottom &&
  `margin-bottom: ${typeof props.marginBottom === 'string' ? props.marginBottom : `${props.marginBottom}px`}`};
`;

export const paddingProps = (props: any) => css`
  ${props.paddingLeft &&
  `padding-left: ${typeof props.paddingLeft === 'string' ? props.paddingLeft : `${props.paddingLeft}px`}`};
  ${props.paddingRight &&
  `padding-right: ${typeof props.paddingRight === 'string' ? props.paddingRight : `${props.paddingRight}px`}`};
  ${props.paddingTop &&
  `padding-top: ${typeof props.paddingTop === 'string' ? props.paddingTop : `${props.paddingTop}px`}`};
  ${props.paddingBottom &&
  `padding-bottom: ${typeof props.paddingBottom === 'string' ? props.paddingBottom : `${props.paddingBottom}px`}`};
`;

export const borderProps = (props: any) => {
  if (props.borderWidth === 0 || props.borderWidth === 'none') {
    return css`
      ${props.borderRadius &&
      `border-radius: ${typeof props.borderRadius === 'string' ? props.borderRadius : `${props.borderRadius}px`}`};
      border: none;
    `;
  }

  return css`
    border-style: solid;
    ${props.borderColor && `border-radius: ${props.borderColor}`};
    ${props.borderWidth &&
    `border-width: ${typeof props.borderWidth === 'string' ? props.borderWidth : `${props.borderWidth}px`}`};
    ${props.borderRadius &&
    `border-radius: ${typeof props.borderRadius === 'string' ? props.borderRadius : `${props.borderRadius}px`}`};
  `;
};

export const fontSizeProps = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 12;

    case 'large':
      return 16;

    default:
    case 'medium':
      return 14;
  }
};

export const fontWeightProps = (props: any) => css`
  ${props.fontWeight &&
  `font-weight: ${typeof props.fontWeight === 'string' ? props.fontWeight : `${props.fontWeight}px`}`};
`;

export const kindProps = (style: 'default' | 'success' | 'danger' | 'warning' | 'info') => {
  switch (style) {
    case 'success':
      return theme.colors.status.success;

    case 'danger':
      return theme.colors.status.danger;

    case 'warning':
      return theme.colors.status.warning;

    case 'info':
      return theme.colors.status.info;

    default:
      return theme.colors.status.default;
  }
};
