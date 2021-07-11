import React, { useEffect } from 'react';
import LinkGeneratorStep2View from './LinkGeneratorStep2.view';

import * as T from './LinkGeneratorStep2.type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import { SetNidaLink } from '@/stores/link';

const LinkGeneratorStep2Container = ({ sourceLink, onPropPrev, onPropNext }: T.LinkGeneratorStep2Props) => {
  const { nidaLink } = useSelector((state: RootState) => state.link);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (sourceLink) {
  //     dispatch(SetNidaLink(sourceLink));
  //   }
  // }, [sourceLink]);

  return <LinkGeneratorStep2View nidaLink={nidaLink} onPropBack={onPropPrev} onPropEnter={onPropNext} />;
};

export default LinkGeneratorStep2Container;
