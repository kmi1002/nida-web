import { StepperProps as OriginStepperProps } from '@material-ui/core/Stepper';

export type StepperProps = Omit<OriginStepperProps, 'children'> & {
  steps: string[];
  step: number;
};
