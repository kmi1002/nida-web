import { AnyAction, combineReducers, Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { AuthState } from '@/stores/auth/type';
import { LinkState } from '@/stores/link/type';
import auth from './auth';
import link from './link';

interface RootStateInterface {
  auth: AuthState;
  link: LinkState;
}

const rootReducer: Reducer<RootStateInterface, { type: typeof HYDRATE; payload: RootStateInterface }> = (
  state,
  action,
) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = { ...state, ...action.payload };

      if (state) {
        nextState.auth = state.auth;
        nextState.link = state.link;
      }
      return nextState;
    }

    default: {
      const combinedReducer = combineReducers<RootStateInterface>({
        auth,
        link,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
