import { AnyAction, combineReducers, Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { AuthState } from '@/stores/auth/type';
import auth from './auth';

interface RootStateInterface {
  auth: AuthState;
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
      }
      return nextState;
    }

    default: {
      const combinedReducer = combineReducers<RootStateInterface>({
        auth,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
