import { TabsProps as OriginTabsProps } from '@material-ui/core/Tabs';

export type TabsProps = Omit<OriginTabsProps, ''> & {
  tabs: { [k: string]: any }[];
  onPropChange: (value: number) => void;
};
