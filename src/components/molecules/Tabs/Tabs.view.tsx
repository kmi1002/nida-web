import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { TabsProps } from './Tabs.type';

const TabsView = ({ tabs, onPropChange, ...props }: TabsProps) => {
  return (
    <Paper>
      <Tabs
        onChange={(_event, value) => {
          onPropChange(value);
        }}
        {...props}
      >
        {tabs.map(({ label }) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default TabsView;
