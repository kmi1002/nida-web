import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    overflowX: 'scroll',
  },
  table: {
    height: 1000,
    width: 500,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  table2: {
    height: 1000,
    width: 1000,
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));
