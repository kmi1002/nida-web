import React, { useEffect, useState } from 'react';
import { checkSpc, removeHttp, checkDomain } from '@/helpers/RegexHelper';

import LinkGeneratorStep3View from './LinkGeneratorStep3.view';
import * as T from './LinkGeneratorStep3.type';
import { LinkStep3Request } from '@/stores/link';
import { useDispatch } from 'react-redux';
import { LinkGeneratorStatus } from '@/types/linkTypes';

const LinkGeneratorStep3Container = ({ targetLink, sourceLink, onPropPrev, onPropNext }: T.LinkGeneratorStep3Props) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ status: LinkGeneratorStatus.none, disabled: false });

  const onCheck = (value: string) => {
    if (checkSpc.test(value)) {
      setState({ ...state, status: LinkGeneratorStatus.specific });
      return;
    }

    if (!checkDomain.test(removeHttp(value))) {
      setState({ ...state, status: LinkGeneratorStatus.url });
      return;
    }

    setState({ ...state, status: LinkGeneratorStatus.none });
  };

  const onEnter = (value: string) => {
    if (value === '') {
      setState({ ...state, status: LinkGeneratorStatus.empty });
      return;
    }

    if (checkSpc.test(value)) {
      setState({ ...state, status: LinkGeneratorStatus.specific });
      return;
    }

    if (process.env.NODE_ENV === 'storybook') {
      onPropNext();
    } else {
      setState({ ...state, disabled: true });
      dispatch(
        LinkStep3Request(
          value,
          () => {
            onPropNext();
            setState({ ...state, disabled: false });
          },
          (error: any) => {
            console.log(error);
            setState({ ...state, disabled: false });
          },
        ),
      );
    }
  };

  useEffect(() => {
    if (targetLink) {
      onCheck(targetLink);
    }
  }, [targetLink]);

  return (
    <LinkGeneratorStep3View
      nidaLink={(sourceLink && sourceLink) || ''}
      targetLink={(targetLink && targetLink) || ''}
      disabled={state.disabled}
      status={state.status}
      onPropCheck={onCheck}
      onPropBack={onPropPrev}
      onPropEnter={onEnter}
    />
  );
};

export default LinkGeneratorStep3Container;
