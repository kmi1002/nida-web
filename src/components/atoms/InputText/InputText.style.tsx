import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(_theme => ({
  readOnly: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // 기본 테두리 색상
      // borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      // 오버 테두리 색상
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      // 포커스 테두리 색상
      borderColor: 'rgba(0, 0, 0, 0.23)',
      borderWidth: '1px',
    },
    '& .MuiOutlinedInput-input': {
      // 기본 텍스트 색상
      color: 'black',
    },
    '&:hover .MuiOutlinedInput-input': {
      // 오버 텍스트 색상
      // color: 'red',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      // 포커스 텍스트 색상
      // color: 'purple',
    },
    '& .MuiInputLabel-outlined': {
      // 기본 라벨 텍스트 색상
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    '&:hover .MuiInputLabel-outlined': {
      // 오버 라벨 텍스트 색상
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      // 포커스 라벨 텍스트 색상
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
  formTextLabel: {
    // fontSize: 16,
    // [theme.breakpoints.up('sm')]: {
    //   fontSize: 18,
    // },
    // [theme.breakpoints.up('md')]: {
    //   fontSize: 20,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: 34,
    // },
  },
  formTextInput: {
    // fontSize: 14,
    // [theme.breakpoints.up('sm')]: {
    //   fontSize: 18,
    // },
    // [theme.breakpoints.up('md')]: {
    //   fontSize: 20,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: 34,
    // },
  },
}));
