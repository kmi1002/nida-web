import React, { useRef } from 'react';
import { Grid, InputAdornment, Typography } from '@material-ui/core';
import { LinkGeneratorStatus } from '@/types/linkTypes';
import { removeHttp } from '@/helpers/RegexHelper';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import { useStyles } from '../LinkGeneratorStep1/LinkGeneratorStep1.style';
import * as T from './LinkGeneratorStep3.type';
import { useTranslation } from 'next-i18next';

const LinkGeneratorStep3View = ({
  status,
  disabled,
  nidaLink,
  targetLink,
  onPropCheck,
  onPropBack,
  onPropEnter,
}: T.LinkGeneratorStep3ViewProps) => {
  const style = useStyles();

  const { t } = useTranslation('common');
  const valueRef = useRef('');

  const helperText = () => {
    switch (status) {
      case LinkGeneratorStatus.empty:
        return t('validation.url.error.empty');
      case LinkGeneratorStatus.specific:
        return t('validation.url.error.specific');
      case LinkGeneratorStatus.url:
        return t('validation.url.error.url');

      default:
        return '';
    }
  };

  return (
    <div>
      <Typography variant="h3" className={style.title}>
        {nidaLink}
      </Typography>
      <InputText
        required
        placeholder={t('linkGenerator.step3.form.placeholder')}
        defaultValue={removeHttp(targetLink)}
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
          startAdornment: <InputAdornment position="start">http://</InputAdornment>,
          classes: {
            input: style.formTextInput,
          },
        }}
      />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <InputButton variant="contained" color="primary" onClick={onPropBack}>
            {t('linkGenerator.step3.prev')}
          </InputButton>
        </Grid>
        <Grid item>
          <InputButton
            variant="contained"
            color="secondary"
            disabled={disabled}
            onClick={() => onPropEnter(valueRef.current.value.trim())}
          >
            {disabled ? t('linkGenerator.step1.loading') : t('linkGenerator.step3.next')}
          </InputButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default LinkGeneratorStep3View;
