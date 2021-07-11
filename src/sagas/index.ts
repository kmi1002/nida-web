import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './auth';

function* rootSaga() {
  yield all([watchLogin(), watchLogout()]);
}

export default rootSaga;
