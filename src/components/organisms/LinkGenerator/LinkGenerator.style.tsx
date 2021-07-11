// .MuiTypography-displayBlock

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  stepper: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0),
    },

    '& .MuiStepLabel-label': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.5rem',
      },
    },
  },
}));
