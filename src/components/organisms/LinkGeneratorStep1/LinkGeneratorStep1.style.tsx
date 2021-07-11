import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 16,
    [theme.breakpoints.up('sm')]: {
      fontSize: 24,
    },
  },
  formTextInput: {
    fontSize: 14,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
}));
