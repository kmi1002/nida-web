import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';
import { useStyles } from './Sidebar.style';
import { SidebarProps } from './Sidebar.type';

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const style = useStyles();

  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon className={`${style.sidebaritemexpandarrow} ${style.sidebaritemexpandarrowexpanded}`} />
    ) : (
      <ExpandMoreIcon className={style.sidebaritemexpandarrow} />
    );
  }

  return (
    <>
      <ListItem className={style.sidebaritem} onClick={onClick} button dense {...rest}>
        <div style={{ paddingLeft: depth * depthStep }} className={style.sidebaritemcontent}>
          {Icon && <Icon className={style.sidebaritemicon} fontSize="small" />}
          <div className={style.sidebaritemtext}>{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === 'divider' ? (
                  <Divider style={{ margin: '6px 0' }} />
                ) : (
                  <SidebarItem depth={depth + 1} depthStep={depthStep} item={subItem} />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

function Sidebar({ items, depthStep, depth, expanded }: SidebarProps) {
  const style = useStyles();

  return (
    <div className={style.sidebar}>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === 'divider' ? (
              <Divider style={{ margin: '6px 0' }} />
            ) : (
              <SidebarItem depthStep={depthStep} depth={depth} expanded={expanded} item={sidebarItem} />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
