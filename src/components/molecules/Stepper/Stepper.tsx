import React from 'react';
import { Stepper as OriginStepper, Step, StepLabel } from '@material-ui/core';
import * as T from './Stepper.type';

const Stepper = ({ steps, step, ...props }: T.StepperProps) => {
  return (
    <OriginStepper activeStep={step - 1} {...props}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </OriginStepper>
  );
};

export default Stepper;
