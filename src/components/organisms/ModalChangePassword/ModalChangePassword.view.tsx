import React from 'react';
import * as T from './ModalChangePassword.type';

import Grid from '@material-ui/core/Grid';
import InputText from '@/atoms/InputText';
import InputButton from '@/atoms/InputButton';
import Modal from '@/molecules/Modal';
import { useTranslation } from '../../../helpers/i18n';

const ModalChangePasswordView = ({ ...props }: T.ModalChangePasswordProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.email.title')}
            placeholder={t('validation.email.placeholder')}
            // error={emailStatus !== AuthStatus.none}
            // helperText={emailHelperText()}
            variant="outlined"
            fullWidth
            onChange={event => {
              // onPropEmailCheck(event.target.value.trim());
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.email.title')}
            placeholder={t('validation.email.placeholder')}
            // error={emailStatus !== AuthStatus.none}
            // helperText={emailHelperText()}
            variant="outlined"
            fullWidth
            onChange={event => {
              // onPropEmailCheck(event.target.value.trim());
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            required
            label={t('validation.email.title')}
            placeholder={t('validation.email.placeholder')}
            // error={emailStatus !== AuthStatus.none}
            // helperText={emailHelperText()}
            variant="outlined"
            fullWidth
            onChange={event => {
              // onPropEmailCheck(event.target.value.trim());
            }}
          />
        </Grid>
      </Grid>
      <div>
        <InputButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          // className={style.process}
          // onClick={onPropProcess}
        >
          {t('forgotPassword.process')}
        </InputButton>
      </div>
    </Modal>
  );
};

export default ModalChangePasswordView;
