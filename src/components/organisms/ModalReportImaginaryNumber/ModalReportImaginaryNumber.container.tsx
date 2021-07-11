import React, { useEffect, useState } from 'react';
import ModalReportImaginaryNumberView from './ModalReportImaginaryNumber.view';
import * as T from './ModalReportImaginaryNumber.type';

const ModalReportImaginaryNumberContainer = ({ ...props }: T.ModalReportImaginaryNumberProps) => {
  return <ModalReportImaginaryNumberView {...props} />;
};

export default ModalReportImaginaryNumberContainer;
