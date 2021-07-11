import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import theme from './theme';

interface FontProps {
  weight: number;
  size: string;
  lineHeight?: number | string;
  letterSpacing?: string;
}

const headings = ({ size, weight, lineHeight, letterSpacing }: FontProps) => `
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  html {
    font-size: ${theme.font.size};
  }

  body {
    font-family: ${theme.font.type.primary};
    font-size: 1rem;
    line-height: 1.5;
    color: ${theme.colors.text['100']};
  }

  h1 {
    ${headings({
      size: '2.5rem',
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.1rem',
    })}
  }

  h2 {
    ${headings({
      size: '2.5rem',
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.1rem',
    })}
  }
  h3 {
    ${headings({
      size: '1.75rem',
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.1rem',
    })}
  }
  h4 {
    ${headings({
      size: '1.5rem',
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.08rem',
    })}
  }
  h5 {
    ${headings({
      size: '1.25rem',
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.05rem',
    })}
  }
  h6 {
    ${headings({
      size: '1rem',
      weight: 400,
      lineHeight: 1.2,
      letterSpacing: '0',
    })}
  }

  strong,
  b {
    font-weight: ${theme.font.weight.bold};
  }

  rem,
  i {
    font-style: italic;
  }

  sub {
    font-size: 0.8rem;
    position: relative;
    top: 0.5rem;
  }

  sup {
    font-size: 0.8rem;
    position: relative;
    top: -0.5rem;
  }

  blockquote {
    border-left: solid 4px;
    font-style: italic;
    margin: 0 0 2rem 0;
    padding: 0.5rem 0 0.5rem 2rem;
  }

  code {
    font-family: ${theme.font.type.code};
    font-size: 0.9rem;
    margin: 0 0.25rem;
    padding: 0.25rem 0.65rem;
    background: rgba(144, 144, 144, 0.075);
    border-radius: ${theme.border.code.radius};
    border: 0.063rem solid ${theme.border.code.color};
  }

  pre {
    -webkit-overflow-scrolling: touch;
    font-family: ${theme.font.type.code};
    font-size: 0.9rem;
    margin: 0 0 2rem 0;

    code {
      display: block;
      line-height: 1.75;
      padding: 1rem 1.5rem;
      overflow-x: auto;
    }
  }
`;

export default GlobalStyles;
