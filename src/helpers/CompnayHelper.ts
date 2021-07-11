export const brandLife = (startYear: number | string) => {
  const target = typeof startYear === 'string' ? Number(startYear) : startYear;
  const compare = new Date().getFullYear();

  if (target > compare) {
    throw Error('브랜드 시작일이 비교일보다 크다');
  }

  return target === compare ? target.toString() : `${target} - ${compare}`;
};
