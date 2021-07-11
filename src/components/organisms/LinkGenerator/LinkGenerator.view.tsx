import React, { FC } from 'react';

import { useStyles } from './LinkGenerator.style';
import * as T from './LinkGenerator.type';
import Stepper from '@/molecules/Stepper';
import LinkGeneratorStep1 from '../LinkGeneratorStep1';
import LinkGeneratorStep2 from '../LinkGeneratorStep2';
import LinkGeneratorStep3 from '../LinkGeneratorStep3';
import LinkGeneratorStep4 from '../LinkGeneratorStep4';
import { useTranslation } from '../../../helpers/i18n';

const LinkGeneratorView: FC<T.LinkGeneratorViewProps> = ({
  children,
  step,
  onPrev,
  onNext,
  nidaLink,
  targetLink,
}: FC<T.LinkGeneratorViewProps>) => {
  const style = useStyles();
  const { t } = useTranslation('common');

  const steps = [
    t('linkGenerator.step1.next'),
    t('linkGenerator.step2.next'),
    t('linkGenerator.step3.next'),
    t('linkGenerator.step4.done'),
  ];

  return (
    <div>
      <div>
        <Stepper step={step} steps={steps} alternativeLabel />
        {step === 1 && <LinkGeneratorStep1 onPropNext={onNext} />}
        {step === 2 && <LinkGeneratorStep2 sourceLink={nidaLink} onPropPrev={onPrev} onPropNext={onNext} />}
        {step === 3 && (
          <LinkGeneratorStep3 sourceLink={nidaLink} targetLink={targetLink} onPropPrev={onPrev} onPropNext={onNext} />
        )}
        {step === 4 && <LinkGeneratorStep4 sourceLink={nidaLink} onPropLogin={onNext} />}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LinkGeneratorView;
