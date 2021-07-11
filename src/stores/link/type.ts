// 링크 생성 Step1
export const LINK_STEP1_REQUEST = 'LINK_STEP1_REQUEST';
export const LINK_STEP1_SUCCESS = 'LINK_STEP1_SUCCESS';
export const LINK_STEP1_FAILURE = 'LINK_STEP1_FAILURE';

// 링크 생성 Step2
export const LINK_STEP2_REQUEST = 'LINK_STEP2_REQUEST';
export const LINK_STEP2_SUCCESS = 'LINK_STEP2_SUCCESS';
export const LINK_STEP2_FAILURE = 'LINK_STEP2_FAILURE';

// 링크 생성 Step3
export const LINK_STEP3_REQUEST = 'LINK_STEP3_REQUEST';
export const LINK_STEP3_SUCCESS = 'LINK_STEP3_SUCCESS';
export const LINK_STEP3_FAILURE = 'LINK_STEP3_FAILURE';

export const LINK_STEP_PREV = 'LINK_STEP_PREV';
export const LINK_STEP_NEXT = 'LINK_STEP_NEXT';

export const SET_NIDA_LINK = 'SET_NIDA_LINK';
export const SET_TARGET_LINK = 'SET_TARGET_LINK';

interface LinkStep1RequestAction {
  type: typeof LINK_STEP1_REQUEST;
  nidaLink: string;
}

interface LinkStep1SuccessAction {
  type: typeof LINK_STEP1_SUCCESS;
  data: any;
}

interface LinkStep1FailureAction {
  type: typeof LINK_STEP1_FAILURE;
}

interface LinkStep2RequestAction {
  type: typeof LINK_STEP2_REQUEST;
}

interface LinkStep2SuccessAction {
  type: typeof LINK_STEP2_SUCCESS;
}

interface LinkStep2FailureAction {
  type: typeof LINK_STEP2_FAILURE;
}

interface LinkStep3RequestAction {
  type: typeof LINK_STEP3_REQUEST;
}

interface LinkStep3SuccessAction {
  type: typeof LINK_STEP3_SUCCESS;
  data: any;
}

interface LinkStep3FailureAction {
  type: typeof LINK_STEP3_FAILURE;
}

export type InitActionTypes =
  | LinkStep1RequestAction
  | LinkStep1SuccessAction
  | LinkStep1FailureAction
  | LinkStep2RequestAction
  | LinkStep2SuccessAction
  | LinkStep2FailureAction
  | LinkStep3RequestAction
  | LinkStep3SuccessAction
  | LinkStep3FailureAction
  | LinkRankRequestAction
  | LinkRankSuccessAction
  | LinkRankFailureAction
  | LinkStepPrevAction
  | LinkStepNextAction
  | SetNidaLinkaction
  | SetTargetLinkaction;

export const LINK_RANK_REQUEST = 'LINK_RANK_REQUEST';
export const LINK_RANK_SUCCESS = 'LINK_RANK_SUCCESS';
export const LINK_RANK_FAILURE = 'LINK_RANK_FAILURE';

interface LinkRankRequestAction {
  type: typeof LINK_RANK_REQUEST;
}
interface LinkRankSuccessAction {
  type: typeof LINK_RANK_SUCCESS;
  data: any;
}

interface LinkRankFailureAction {
  type: typeof LINK_RANK_FAILURE;
}

interface LinkStepPrevAction {
  type: typeof LINK_STEP_PREV;
}

interface LinkStepNextAction {
  type: typeof LINK_STEP_NEXT;
}

interface SetNidaLinkaction {
  type: typeof SET_NIDA_LINK;
  link: string;
}

interface SetTargetLinkaction {
  type: typeof SET_TARGET_LINK;
  link: string;
}

export interface LinkState {
  step: number;
  nidaLink: string;
  targetLink: string;

  ranks: { start: number; total: number; items: [] };
  recommand: { start: number; total: number; items: [] };
}
