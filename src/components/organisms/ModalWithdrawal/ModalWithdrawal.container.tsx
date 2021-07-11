import React, { useEffect, useState } from 'react';
import ModalWithdrawalView from './ModalWithdrawal.view';
import * as T from './ModalWithdrawal.type';

const ModalWithdrawalContainer = ({ ...props }: T.ModalWithdrawalProps) => {
  return <ModalWithdrawalView {...props} />;
};

export default ModalWithdrawalContainer;
