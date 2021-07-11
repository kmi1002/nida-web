import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import * as T from './LinkGeneratorStep2.type';
import { useStyles } from '../LinkGeneratorStep1/LinkGeneratorStep1.style';
import { useTranslation } from 'next-i18next';

const LinkGeneratorStep2View = ({ nidaLink, onPropBack, onPropEnter }: T.LinkGeneratorStep2ViewProps) => {
  const style = useStyles();
  const { t } = useTranslation('common');

  return (
    <>
      <Typography variant="h3" className={style.title}>
        {nidaLink}
      </Typography>
      <InputText
        placeholder={t('linkGenerator.step2.form.placeholder')}
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
        InputProps={{
          classes: {
            input: style.formTextInput,
          },
        }}
      />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <InputButton variant="contained" color="primary" onClick={onPropBack}>
            {t('linkGenerator.step2.prev')}
          </InputButton>
        </Grid>
        <Grid item>
          <InputButton variant="contained" color="secondary" onClick={onPropEnter}>
            {t('linkGenerator.step2.next')}
          </InputButton>
        </Grid>
      </Grid>
    </>
  );
};

export default LinkGeneratorStep2View;
