const log = (type: 'Error' | 'Info', target: string, msg: any) => {
  if (process.env.ENV === 'local') {
    // eslint-disable-next-line no-console
    console.log(`${type} - ${target}`, msg);
  }
};

export const printDebug = (target: string, msg: any = '') => {
  log('Info', target, msg);
};

export const printError = (target: string, msg: any) => {
  log('Error', target, msg);
};
