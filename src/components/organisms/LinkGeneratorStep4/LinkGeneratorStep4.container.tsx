import React from 'react';
import LinkGeneratorStep4View from './LinkGeneratorStep4.view';

import * as T from './LinkGeneratorStep4.type';

const LinkGeneratorStep4Container = ({ sourceLink, onPropLogin }: T.LinkGeneratorStep4Props) => {
  const onCopy = () => {};

  return (
    <LinkGeneratorStep4View nidaLink={(sourceLink && sourceLink) || ''} onPropCopy={onCopy} onPropLogin={onPropLogin} />
  );
};

export default LinkGeneratorStep4Container;
