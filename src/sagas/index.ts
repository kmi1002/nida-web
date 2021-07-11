import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './auth';
import { watchRecommendDomain, watchLinkConnect, watchLinkRank } from './link';

function* rootSaga() {
  yield all([watchLogin(), watchLogout(), watchRecommendDomain(), watchLinkConnect(), watchLinkRank()]);
}

export default rootSaga;
