import React, { useState } from 'react';
import LinkGeneratorView from './LinkGenerator.view';

import * as T from './LinkGenerator.type';
import { RootState } from '@/stores/index';
import { useSelector, useDispatch } from 'react-redux';

import { LinkStepPrev, LinkStepNext } from '@/stores/link';

import LinkRank from '../LinkRank';
import LinkRecommand from '../LinkRecommand';

const LinkGeneratorContainer = () => {
  const { step, nidaLink, targetLink } = useSelector((state: RootState) => state.link);
  const dispatch = useDispatch();

  const onPrev = () => {
    dispatch(LinkStepPrev());
  };

  const onNext = () => {
    dispatch(LinkStepNext());
  };

  return (
    <LinkGeneratorView step={step} onNext={onNext} onPrev={onPrev} nidaLink={nidaLink} targetLink={targetLink}>
      {/*{step === 1 && <LinkRank />}*/}
      {(step === 2 || step === 3) && <LinkRecommand rows={[]} />}
    </LinkGeneratorView>
  );
};

export default LinkGeneratorContainer;
