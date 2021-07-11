import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  sidebar: { maxWidth: '240px', height: '100vh', border: '1px solid rgba(0, 0, 0, 0.1)' },
  sidebaritem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  sidebaritemcontent: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  sidebaritemicon: { marginRight: '6px' },
  sidebaritemtext: { width: '100%' },
  sidebaritemexpandarrow: { fontSize: '1.2rem !important' },
  sidebaritemexpandarrowexpanded: { color: '#09bb12', fontWeight: 'bold' },
}));
