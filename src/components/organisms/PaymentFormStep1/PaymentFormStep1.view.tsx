import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import InputText from '@/atoms/InputText';
import { useStyles } from './PaymentFormStep1.style';
import InputButton from '@/atoms/InputButton';
import * as T from './PaymentFormStep1.type';
import InputCheck from '@/atoms/InputCheck';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { useTranslation } from 'next-i18next';

const PaymentFormStep1View = ({ onPropEnter }: T.PaymentFormStep1ViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step1.product')}
            defaultValue="1개월 정기 이용권"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step1.range')}
            defaultValue="2020-01-01 ~ 2020-01-31"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.name.title')}
            placeholder={t('validation.name.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.email.title')}
            placeholder={t('validation.email.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.phone.title')}
            placeholder={t('validation.phone.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputCheck
            items={[{ label: t('PaymentForm.step1.agree'), value: 'check' }]}
            color="primary"
            checked
            onChange={event => {
              // onPropAgree(event.target.checked);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <InputButton variant="contained" color="primary" onClick={onPropEnter}>
                {t('PaymentForm.step1.process')}
              </InputButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentFormStep1View;
