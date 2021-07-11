import React, { useEffect, useState } from 'react';
import ModalReleaseLinkView from './ModalReleaseLink.view';
import * as T from './ModalReleaseLink.type';

const ModalReleaseLinkContainer = ({ ...props }: T.ModalReleaseLinkProps) => {
  return <ModalReleaseLinkView {...props} />;
};

export default ModalReleaseLinkContainer;
