import React, { useEffect, useState } from 'react';
import SupportSingleView from './SupportSingle.view';
import * as T from './SupportSingle.type';

const SupportSingleContainer = ({ introduce, privacy, terms }: T.SupportSingleProps) => {
  const [value, setValue] = useState(0);
  const onChange = (value: number) => {
    setValue(value);
    console.log(value);
  };

  return (
    <SupportSingleView value={value} onPropChange={onChange} introduce={introduce} privacy={privacy} terms={terms} />
  );
};

export default SupportSingleContainer;
