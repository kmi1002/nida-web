import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import * as S from '../LinkGeneratorStep1/LinkGeneratorStep1.style';
import * as T from './LinkGeneratorStep4.type';
import { useStyles } from '../LinkGeneratorStep1/LinkGeneratorStep1.style';
import { useTranslation } from 'next-i18next';

const LinkGeneratorStep4View = ({ nidaLink, onPropCopy, onPropLogin }: T.LinkGeneratorStep4ViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');

  return (
    <>
      <Typography variant="h3" className={style.title}>
        {nidaLink}
      </Typography>
      <InputText
        placeholder={t('linkGenerator.step4.form.placeholder')}
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
          <CopyToClipboard text={nidaLink}>
            <InputButton variant="contained" color="secondary" onClick={onPropCopy}>
              {t('linkGenerator.step4.copy')}
            </InputButton>
          </CopyToClipboard>
        </Grid>
        <Grid item>
          <InputButton variant="contained" color="primary" onClick={onPropLogin}>
            {t('linkGenerator.step4.login')}
          </InputButton>
        </Grid>
      </Grid>
    </>
  );
};

export default LinkGeneratorStep4View;
