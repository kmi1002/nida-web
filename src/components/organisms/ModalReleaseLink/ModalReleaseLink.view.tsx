import React from 'react';
import * as T from './ModalReleaseLink.type';
import * as S from './ModalReleaseLink.style';
import { Line } from 'react-chartjs-2';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputText from '@/atoms/InputText';
import { AuthStatus } from '../../../types/linkTypes';
import InputButton from '@/atoms/InputButton';
import Modal from '@/molecules/Modal';
import { useTranslation } from '../../../helpers/i18n';

const ModalReleaseLinkView = ({ ...props }: T.ModalReleaseLinkProps) => {
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

export default ModalReleaseLinkView;
