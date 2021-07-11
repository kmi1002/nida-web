import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  // buttons: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },

  disabled: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // 기본 테두리 색상
      // borderColor: "green"
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // borderColor: "red"
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      // borderColor: 'purple',
    },
    '& .MuiOutlinedInput-input': {
      // 기본 텍스트 색상
      color: 'black',
    },
    '&:hover .MuiOutlinedInput-input': {
      // color: 'red',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      // color: 'purple',
    },
    '& .MuiInputLabel-outlined': {
      // color: 'green',
    },
    '&:hover .MuiInputLabel-outlined': {
      // color: 'red',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      // color: 'purple',
    },
  },

  vat: {
    '& > p': {
      fontSize: '12px',
    },
  },
}));
