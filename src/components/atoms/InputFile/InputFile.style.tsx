import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    display: 'none',
  },
  placeholder: {
    marginLeft: theme.spacing(2),
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(1),
  },
  previewWrapper: {
    position: 'relative',
    margin: theme.spacing(1),
  },
  image: {
    width: '100px',
    height: '100px',
  },
  imageRemove: {
    position: 'absolute',
    left: theme.spacing(-3),
    top: theme.spacing(-3),
  },
  file: {
    margin: theme.spacing(2),
  },
  fileRemove: {
    position: 'absolute',
    left: theme.spacing(-3),
    top: theme.spacing(-2),
  },
}));
