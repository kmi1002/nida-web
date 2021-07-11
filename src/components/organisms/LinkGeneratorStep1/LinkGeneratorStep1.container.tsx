import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LinkStep1Request, SetNidaLink } from '@/stores/link';
import { checkSpc } from '@/helpers/RegexHelper';
import { LinkGeneratorStatus } from '@/types/linkTypes';
import LinkGeneratorStep1View from './LinkGeneratorStep1.view';
import * as T from './LinkGeneratorStep1.type';

const LinkGeneratorStep1Container = ({ sourceLink, onPropNext }: T.LinkGeneratorStep1Props) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ status: LinkGeneratorStatus.none, disabled: false });

  const onCheck = (value: string) => {
    if (checkSpc.test(value)) {
      setState({ ...state, status: LinkGeneratorStatus.specific });
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
      // dispatch(SetNidaLink(value));
      onPropNext();
    } else {
      setState({ ...state, disabled: true });
      dispatch(
        LinkStep1Request(
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
    if (sourceLink) {
      onCheck(sourceLink);
    }
  }, [sourceLink]);

  return (
    <LinkGeneratorStep1View
      disabled={state.disabled}
      sourceLink={sourceLink}
      status={state.status}
      onPropCheck={onCheck}
      onPropEnter={onEnter}
    />
  );
};

export default LinkGeneratorStep1Container;
