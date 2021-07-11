import React from 'react';
import { ModalProps } from './Modal.type';
import * as S from './Modal.style';

const Modal = ({ children, onPropClose, ...props }: ModalProps) => {
  return (
    <S.Container onClose={onPropClose} {...props}>
      <S.Tmp>{children}</S.Tmp>
    </S.Container>
  );
};

export default Modal;
