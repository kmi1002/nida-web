import React, { useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import { LinkGeneratorStatus } from '@/types/linkTypes';
import { useStyles } from './LinkGeneratorStep1.style';
import * as T from './LinkGeneratorStep1.type';
import { useTranslation } from 'next-i18next';

const LinkGeneratorStep1View = ({
  disabled,
  sourceLink,
  status,
  onPropCheck,
  onPropEnter,
}: T.LinkGeneratorStep1ViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');
  const valueRef = useRef('');

  const helperText = () => {
    switch (status) {
      case LinkGeneratorStatus.empty:
        return t('validation.nidaUrl.error.empty');
      case LinkGeneratorStatus.specific:
        return t('validation.nidaUrl.error.specific');
      default:
        return '';
    }
  };

  return (
    <>
      <Typography variant="h3" className={style.title}>
        {t('linkGenerator.step1.title')}
      </Typography>
      <InputText
        required
        placeholder={t('validation.nidaUrl.placeholder')}
        defaultValue={sourceLink}
        error={status !== LinkGeneratorStatus.none}
        helperText={helperText()}
        variant="outlined"
        fullWidth
        margin="normal"
        inputRef={valueRef}
        onChange={event => {
          onPropCheck(event.target.value.trim());
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onPropEnter(event.target.value.trim());
            event.preventDefault();
          }
        }}
        InputProps={{
          classes: {
            input: style.formTextInput,
          },
        }}
      />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <InputButton
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={() => onPropEnter(valueRef.current.value.trim())}
          >
            {disabled ? t('linkGenerator.step1.loading') : t('linkGenerator.step1.next')}
          </InputButton>
        </Grid>
      </Grid>
    </>
  );
};

export default LinkGeneratorStep1View;
