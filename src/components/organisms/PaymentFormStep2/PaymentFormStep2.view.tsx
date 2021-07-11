import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import InputText from '@/atoms/InputText';
import InputRadio from '@/atoms/InputRadio';
import { useStyles } from './PaymentFormStep2.style';
import InputButton from '@/atoms/InputButton';

import * as T from './PaymentFormStep2.type';
import InputCheck from '@/atoms/InputCheck';
import { useTranslation } from 'next-i18next';

const PaymentFormStep2View = ({ onPropBack, onPropEnter }: T.PaymentFormStep2ViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputRadio
            horizontal
            formLabel={t('PaymentForm.step2.card.title')}
            defaultValue="person"
            items={[
              {
                label: t('PaymentForm.step2.card.type.person'),
                value: 'person',
              },
              {
                label: t('PaymentForm.step2.card.type.company'),
                value: 'company',
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.cardNumber.title')}
            placeholder={t('validation.cardNumber.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
            readyOnly
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputText
            required
            label={t('validation.expMonth.title')}
            placeholder={t('validation.expMonth.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputText
            required
            label={t('validation.expYear.title')}
            placeholder={t('validation.expYear.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputText
            required
            label={t('validation.birthYear.title')}
            placeholder={t('validation.birthYear.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputText
            required
            label={t('validation.cardPassword.title')}
            placeholder={t('validation.cardPassword.placeholder')}
            defaultValue=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputCheck
            items={[{ label: t('PaymentForm.step2.agree'), value: 'check' }]}
            color="primary"
            onChange={event => {
              // onPropAgree(event.target.checked);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <InputButton variant="contained" color="primary" onClick={onPropBack}>
                {t('PaymentForm.step2.prev')}
              </InputButton>
            </Grid>
            <Grid item>
              <InputButton variant="contained" color="primary" onClick={onPropEnter}>
                {t('PaymentForm.step2.process')}
              </InputButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentFormStep2View;
