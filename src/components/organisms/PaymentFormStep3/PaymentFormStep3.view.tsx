import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import InputText from '@/atoms/InputText';
import InputCheck from '@/atoms/InputCheck';
import { useStyles } from './PaymentFormStep3.style';
import InputButton from '@/atoms/InputButton';
import * as T from './PaymentFormStep3.type';
import InputRadio from '@/atoms/InputRadio';
import { useTranslation } from 'next-i18next';

const PaymentFormStep3View = ({ onPropHome }: T.PaymentFormStep3ViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step3.orderNumber')}
            defaultValue="12345677"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step3.product')}
            defaultValue="1개월 정기 이용권"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step3.range')}
            defaultValue="2020-01-01 ~ 2020-01-31"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('paymentForm.step3.price')}
            defaultValue="9,900원"
            variant="outlined"
            fullWidth
            margin="normal"
            readyOnly
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={style.vat}>
                  {t('paymentForm.vat')}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step3.result')}
            defaultValue="성공"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('PaymentForm.step3.schedule')}
            defaultValue="2020-01-01"
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <InputButton variant="contained" color="primary" onClick={onPropHome}>
                {t('PaymentForm.step3.process')}
              </InputButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentFormStep3View;
