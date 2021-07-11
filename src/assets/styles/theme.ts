const remUnit = (value: number) => `
  ${value}rem
`;

// 크기
export const size = {
  s1: remUnit(0.063),
  s2: remUnit(0.125),
  s4: remUnit(0.25),
  s10: remUnit(0.625),
  s12: remUnit(0.75),
  s14: remUnit(0.875),
  s16: remUnit(1),
  s18: remUnit(1.125),
  s20: remUnit(1.25),
  s22: remUnit(1.375),
  s24: remUnit(1.5),
  s26: remUnit(1.625),
  s28: remUnit(1.75),
  s30: remUnit(1.875),
  s32: remUnit(2),
  s34: remUnit(2.125),
};

// 폰트
export const font = {
  type: {
    primary: '"Noto Sans KR", "Helvetica", Arial, sans-serif', // 고딕체
    secondary: '"Courier", "Courier New", "Georgia", "Times", "Times New Roman", serif', // 바탕체
    code: '"Courier New", monospace', // 글자 폭과 간격이 일정
  },
  weight: {
    thin: 100,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: 16,
};

// 기본 색상
export const colors = {
  primary: {
    100: '#168E9B',
    75: '#50ABB4',
    50: '#8AC6CC',
    25: '#C4E3E6',
  },
  secondary: {
    100: '#5A8DEE',
    75: '#84AAF3',
    50: '#ACC6F6',
    25: '#D6E2FB',
  },
  status: {
    default: '#d0d0d0',
    success: '#6cd2bb',
    danger: '#fd5166',
    warning: '#fee071',
    info: '#ebebeb',
  },
  text: {
    100: '#202020',
    75: '#7D86A9',
    50: '#48607a',
    25: '#9b9b9b',
  },
  input: {
    disabled: 'rgba(225, 225, 225, 0.68)',
    transparent: 'transparent',
  },
};

export const border = {
  default: {
    radius: size.s4,
    width: size.s1,
  },
  focus: {
    radius: size.s4,
    width: size.s2,
  },
  code: {
    radius: size.s4,
    width: size.s1,
    color: '#cccccc',
  },
};

export const shadow = {
  web: {
    boxShadow: '0 2px 14px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  ios: {
    x: 0,
    y: 0,
    blur: '10px',
    spread: 0,
    color: '#d0d0d0',
  },
  android: {
    color: '#d0d0d0',
    radius: '8px',
    width: '1px',
  },
};

// 링크 색상
export const link = {
  default: '#496ddb',
  visited: '#101011',
  hover: 'darken(#496ddb, 10%)',
  active: '#d44076',
};

// Z-index
export const zIndex = {
  z0: -1,
  z1: 10,
  z2: 20,
  z3: 30,
  z4: 40,
  z5: 50,
  z6: 60,
  z7: 70,
  z8: 80,
  z9: 90,
  z10: 100,
};

const theme = {
  font,
  colors,
  border,
  shadow,
  link,
  size,
  zIndex,
};

export default theme;
