import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import InputText from '@/atoms/InputText';
import InputCheck from '@/atoms/InputCheck';
import { useStyles } from './PaymentForm.style';
import InputButton from '@/atoms/InputButton';
import * as T from './PaymentForm.type';
import { useTranslation } from 'next-i18next';

const PaymentFormView = ({ onPropPaymentForm }: T.PaymentFormViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');

  return (
    <>
      <InputText
        required
        label={t('paymentForm.product')}
        defaultValue="1개월 정기 이용권"
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
      />
      <InputText
        required
        label={t('paymentForm.range')}
        defaultValue="2020-01-01 ~ 2020-01-31"
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
      />
      <InputText
        required
        label={t('paymentForm.price')}
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
      <InputCheck
        items={[{ label: t('paymentForm.tmp'), value: 'check' }]}
        color="primary"
        onChange={event => {
          // onPropAgree(event.target.checked);
        }}
      />

      <Grid container spacing={2} justify="center">
        <Grid item>
          <InputButton variant="contained" color="primary" onClick={onPropPaymentForm}>
            {t('paymentForm.process')}
          </InputButton>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentFormView;
