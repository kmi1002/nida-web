import React, { useEffect, useState } from 'react';
import ModalChangePasswordView from './ModalChangePassword.view';
import * as T from './ModalChangePassword.type';

const ModalChangePasswordContainer = ({ ...props }: T.ModalChangePasswordProps) => {
  return <ModalChangePasswordView {...props} />;
};

export default ModalChangePasswordContainer;
