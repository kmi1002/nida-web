import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { AuthStatus } from '@/types/linkTypes';
import { useStyles } from '../SignUpForm/SignUpForm.style';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import * as T from './ForgotPasswordForm.type';
import { useTranslation } from 'next-i18next';

const ForgotPasswordFormView = ({ emailStatus, onPropEmailCheck, onPropProcess }: T.ForgotPasswordFormViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');

  const emailHelperText = () => {
    switch (emailStatus) {
      case AuthStatus.empty:
        return t('validation.email.error.empty');
      case AuthStatus.email:
        return t('validation.email.error.format');
      default:
        return '';
    }
  };

  return (
    <div className={style.paper}>
      <div className={style.header}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('auth.forgotPassword.title')}
        </Typography>
      </div>
      <Grid container spacing={2} className={style.body}>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.email.title')}
            placeholder={t('validation.email.placeholder')}
            error={emailStatus !== AuthStatus.none}
            helperText={emailHelperText()}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={event => {
              onPropEmailCheck(event.target.value.trim());
            }}
          />
        </Grid>
      </Grid>
      <div className={style.footer}>
        <InputButton variant="contained" color="primary" fullWidth className={style.process} onClick={onPropProcess}>
          {t('auth.forgotPassword.process')}
        </InputButton>
        <InputButton variant="contained" color="primary" fullWidth className={style.process} onClick={onPropProcess}>
          {t('auth.forgotPassword.process')}
        </InputButton>
      </div>
    </div>
  );
};

export default ForgotPasswordFormView;
