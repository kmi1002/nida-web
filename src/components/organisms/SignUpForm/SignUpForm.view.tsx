import React from 'react';
import { Avatar, Button, Grid, Link, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AuthStatus } from '@/types/linkTypes';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import InputCheck from '@/atoms/InputCheck';
import * as T from './SignUpForm.type';
import { useStyles } from './SignUpForm.style';
import { useTranslation } from 'next-i18next';

const SignUpFormView = ({
  nameStatus,
  emailStatus,
  passwordStatus,
  onPropNameCheck,
  onPropEmailCheck,
  onPropPasswordCheck,
  onPropProcess,
  onPropAgree,
}: T.SignUpFormViewProps) => {
  const style = useStyles();
  const { t } = useTranslation('common');

  const nameHelperText = () => {
    switch (nameStatus) {
      case AuthStatus.empty:
        return t('validation.name.error.empty');
      case AuthStatus.name:
        return t('validation.name.error.format');
      default:
        return '';
    }
  };

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

  const passwordHelperText = () => {
    switch (passwordStatus) {
      case AuthStatus.empty:
        return t('validation.password.error.empty');
      case AuthStatus.password:
        return t('validation.password.error.format');
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
          {t('auth.signUp.title')}
        </Typography>
      </div>
      <Grid container spacing={2} className={style.body}>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.name.title')}
            placeholder={t('validation.name.placeholder')}
            error={nameStatus !== AuthStatus.none}
            helperText={nameHelperText()}
            variant="outlined"
            fullWidth
            onChange={event => {
              onPropNameCheck(event.target.value.trim());
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.email.title')}
            placeholder={t('validation.email.placeholder')}
            error={emailStatus !== AuthStatus.none}
            helperText={emailHelperText()}
            variant="outlined"
            fullWidth
            onChange={event => {
              onPropEmailCheck(event.target.value.trim());
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            type="password"
            label={t('validation.password.title')}
            placeholder={t('validation.password.placeholder')}
            error={passwordStatus !== AuthStatus.none}
            helperText={passwordHelperText()}
            variant="outlined"
            fullWidth
            onChange={event => {
              onPropPasswordCheck(event.target.value.trim());
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputCheck
            items={[{ label: t('auth.signUp.agree'), value: 'check' }]}
            color="primary"
            onChange={event => {
              onPropAgree(event.target.checked);
            }}
          />
        </Grid>
      </Grid>
      <div className={style.footer}>
        <InputButton variant="contained" color="primary" fullWidth className={style.process} onClick={onPropProcess}>
          {t('auth.signUp.process')}
        </InputButton>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              {t('auth.signUp.alreadyAccount')}
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignUpFormView;
