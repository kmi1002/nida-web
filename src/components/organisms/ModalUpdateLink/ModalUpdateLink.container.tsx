import React, { useEffect, useState } from 'react';
import ModalUpdateLinkView from './ModalUpdateLink.view';
import * as T from './ModalUpdateLink.type';

const ModalUpdateLinkContainer = ({ ...props }: T.ModalUpdateLinkProps) => {
  return <ModalUpdateLinkView {...props} />;
};

export default ModalUpdateLinkContainer;
