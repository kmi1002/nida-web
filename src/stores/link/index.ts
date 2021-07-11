import * as T from './type';
import { LINK_STEP_NEXT, LINK_STEP_PREV } from './type';

// 액션 생성함수
export const LinkStep1Request = (nidaLink: string, onSuccess?: any, onFailure?: any) => ({
  type: T.LINK_STEP1_REQUEST,
  nidaLink,
  onSuccess,
  onFailure,
});
export const LinkStep1Success = (data: any) => ({ type: T.LINK_STEP1_SUCCESS, data });
export const LinkStep1Failure = () => ({ type: T.LINK_STEP1_FAILURE });

export const LinkStep2Request = () => ({ type: T.LINK_STEP2_REQUEST });
export const LinkStep2Success = () => ({ type: T.LINK_STEP2_SUCCESS });
export const LinkStep2Failure = () => ({ type: T.LINK_STEP2_FAILURE });

export const LinkStep3Request = (targetLink: string, onSuccess?: any, onFailure?: any) => ({
  type: T.LINK_STEP3_REQUEST,
  targetLink,
  onSuccess,
  onFailure,
});
export const LinkStep3Success = (data: any) => ({ type: T.LINK_STEP3_SUCCESS, data });
export const LinkStep3Failure = () => ({ type: T.LINK_STEP3_FAILURE });

export const LinkStepPrev = () => ({ type: T.LINK_STEP_PREV });
export const LinkStepNext = () => ({ type: T.LINK_STEP_NEXT });

export const SetNidaLink = (link: string) => ({ type: T.SET_NIDA_LINK, link });
export const SetTargetLink = (link: string) => ({ type: T.SET_TARGET_LINK, link });

// 초기 상태값
const initialState: T.LinkState = {
  step: 1,
  nidaLink: '',
  targetLink: '',
  ranks: { start: 0, total: 0, items: [] },
  recommand: { start: 0, total: 0, items: [] },
};

export const LinkRankRequest = (onSuccess?: any, onFailure?: any) => ({
  type: T.LINK_RANK_REQUEST,
  onSuccess,
  onFailure,
});
export const LinkRankSuccess = (data: any) => ({ type: T.LINK_RANK_SUCCESS, data });
export const LinkRankFailure = () => ({ type: T.LINK_RANK_FAILURE });

// 리듀셔
const linkReducer = (state = initialState, action: T.InitActionTypes): T.LinkState => {
  switch (action.type) {
    case T.LINK_STEP1_REQUEST:
      return {
        ...state,
        nidaLink: `http://${action.nidaLink}`,
      };

    case T.LINK_STEP1_SUCCESS:
      return {
        ...state,
        nidaLink: action.data.list.first,
        recommand: { start: action.data.start, total: action.data.count, items: action.data.list },
      };

    case T.LINK_STEP1_FAILURE:
      return {
        ...state,
      };

    case T.LINK_STEP2_SUCCESS:
      return {
        ...state,
      };

    case T.LINK_STEP2_FAILURE:
      return {
        ...state,
      };

    case T.LINK_STEP3_SUCCESS:
      return {
        ...state,
      };

    case T.LINK_STEP3_FAILURE:
      return {
        ...state,
      };

    case T.LINK_STEP_PREV:
      return {
        ...state,
        step: Math.max(state.step - 1, 1),
      };

    case T.LINK_STEP_NEXT:
      return {
        ...state,
        step: Math.min(state.step + 1, 4),
      };

    case T.SET_NIDA_LINK:
      return {
        ...state,
        nidaLink: action.link,
      };

    case T.SET_TARGET_LINK:
      return {
        ...state,
        targetLink: action.link,
      };

    case T.LINK_RANK_SUCCESS: {
      return {
        ...state,
        ranks: { start: action.data.start, total: action.data.count, items: action.data.list },
      };
    }

    default:
      return state;
  }
};

export default linkReducer;
