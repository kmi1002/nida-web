import React from 'react';
import { Avatar, Grid, Link, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AuthStatus } from '@/types/linkTypes';
import { ProviderType } from '@/stores/auth/type';
import { useStyles } from '../SignUpForm/SignUpForm.style';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import InputCheck from '@/atoms/InputCheck';

import * as T from './SignInForm.type';
import { useTranslation } from 'next-i18next';

const SignInFormView = ({
  emailStatus,
  passwordStatus,
  onPropSns,
  onPropEmailCheck,
  onPropPasswordCheck,
  onPropProcess,
}: T.SignInFormViewProps) => {
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
          {t('auth.signIn.title')}
        </Typography>
      </div>
      <Grid container spacing={2} className={style.body}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <InputButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  onPropSns(ProviderType.FACEBOOK);
                }}
              >
                {t('auth.signIn.sns.facebook')}
              </InputButton>
            </Grid>
            <Grid item xs={4}>
              <InputButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  onPropSns(ProviderType.GOOGLE);
                }}
              >
                {t('auth.signIn.sns.google')}
              </InputButton>
            </Grid>
            <Grid item xs={4}>
              <InputButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  onPropSns(ProviderType.KAKAO);
                }}
              >
                {t('auth.signIn.sns.kakao')}
              </InputButton>
            </Grid>
          </Grid>
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
          <InputCheck items={[{ label: t('auth.signIn.rememberMe'), value: 'check' }]} color="primary" />
        </Grid>
      </Grid>
      <div className={style.footer}>
        <InputButton variant="contained" color="primary" fullWidth className={style.process} onClick={onPropProcess}>
          {t('auth.signIn.process')}
        </InputButton>
        <Grid container spacing={2} justify="space-between">
          <Grid item>
            <Link href="#" variant="body2">
              {t('auth.signIn.forgotPassword')}
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {t('auth.signIn.notAccount')}
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignInFormView;
