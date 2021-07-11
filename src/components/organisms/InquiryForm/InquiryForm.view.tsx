import React from 'react';
import * as T from './InquiryForm.type';
import * as S from './InquiryForm.style';
import { Button, MenuItem, Select, TextField } from '@material-ui/core';
import { AuthStatus } from '@/types/linkTypes';
import Grid from '@material-ui/core/Grid';
import InputText from '@/atoms/InputText';
import InputSelect from '@/atoms/InputSelect';
import InputFile from '@/atoms/InputFile';
import InputButton from '@/atoms/InputButton';
import { useTranslation } from 'next-i18next';

const InquiryFormView = ({ onPropOk, onPropCancel }: T.InquiryFormViewProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <InputSelect
        required
        variant="outlined"
        fullWidth
        label={t('inquiryForm.type')}
        options={[
          {
            title: '값1',
            value: 1,
          },
          {
            title: '값2',
            value: 2,
          },
          {
            title: '값3',
            value: 3,
          },
        ]}
      />
      <InputText
        required
        label={t('validation.name.title')}
        placeholder={t('validation.name.placeholder')}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputText
        required
        label={t('validation.email.title')}
        placeholder={t('validation.email.placeholder')}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputText
        required
        label={t('validation.phone.title')}
        placeholder={t('validation.phone.placeholder')}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputText
        required
        label={t('validation.title.title')}
        placeholder={t('validation.title.placeholder')}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputText
        required
        label={t('validation.title.title')}
        placeholder={t('validation.title.placeholder')}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputText
        required
        label={t('validation.content.title')}
        placeholder={t('validation.content.placeholder')}
        multiline
        rows={5}
        rowsMax={15}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <InputFile
        preview="file"
        placeholder={t('inquiryForm.file.placeholder')}
        label={t('inquiryForm.file.label')}
        errorCount={t('inquiryForm.file.error.count')}
        maxCount={3}
        helperText={t('inquiryForm.file.helper')}
        accept="*"
      />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <InputButton variant="contained" color="primary" onClick={onPropOk}>
            {t('inquiryForm.save')}
          </InputButton>
        </Grid>
        <Grid item>
          <InputButton variant="contained" color="secondary" onClick={onPropCancel}>
            {t('inquiryForm.cancel')}
          </InputButton>
        </Grid>
      </Grid>
    </>
  );
};

export default InquiryFormView;
