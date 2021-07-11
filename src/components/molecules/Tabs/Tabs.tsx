import React from 'react';
import TabsView from './Tabs.view';
import { TabsProps } from './Tabs.type';

const Tabs = ({ tabs, onPropChange, ...props }: TabsProps) => {
  const [value, setValue] = React.useState(0);

  const onChange = (value: number) => {
    setValue(value);

    if (onPropChange) {
      onPropChange(value);
    }
  };

  return <TabsView value={value} tabs={tabs} onPropChange={onChange} {...props} />;
};

export default Tabs;
