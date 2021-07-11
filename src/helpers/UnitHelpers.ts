export const bytesToSize = (bytes: number): string => {
  const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i: number = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};

export const UnitHelper = {
  renderUnit: (type: 'number' | 'count' | 'people' | 'money' | 'percent' | 'rank' | 'kwh' | 'default'): string => {
    switch (type) {
      case 'number':
        return '개';
      case 'count':
        return '회';
      case 'people':
        return '명';
      case 'money':
        return '원';
      case 'percent':
        return '%';
      case 'rank':
        return '위';
      case 'kwh':
        return 'kWh';
      default:
        return '';
    }
  },

  positiveCheck: (val: number): boolean => {
    return val >= 0;
  },

  rankText: (val: number): number => {
    return Math.abs(val);
  },

  rateText: (val: number, symbol = false): string => {
    if (val === null) {
      return 'NULL';
    }

    if (symbol && UnitHelper.positiveCheck(val)) {
      return `+ ${UnitHelper.comma(Math.abs(val))}`;
    }
    return UnitHelper.comma(val);
  },

  comma: (val: number): string => {
    const values = val.toFixed(2).toString().split('.');

    // 소수점을 포함하는 경우
    if (values.length === 2) {
      return `${values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${values[1].toString()}`;
    }

    // 소수점이 없는 경우
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  renderUnitValue: (
    value: number,
    type: 'number' | 'count' | 'people' | 'money' | 'percent' | 'rank' | 'kwh' | 'default',
    symbole = false,
  ) => {
    return `${UnitHelper.rateText(value, symbole)} ${UnitHelper.renderUnit(type)}`;
  },
};
