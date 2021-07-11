import { call, fork, take, put } from 'redux-saga/effects';

import * as authApis from '@/apis/link';

function* recommendDomain(nidaLink: string, onSuccess?: any, onFailure?: any) {
  try {
    // Api 호출
    const { data } = yield call(authApis.recommendDomain, nidaLink, 486);

    // 성공 통보
    yield put({ type: 'LINK_STEP1_SUCCESS', data });

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    // 실패 통보
    yield put({ type: 'LINK_STEP1_FAILURE', error });

    if (onFailure) {
      onFailure(error);
    }
  }
}

function* linkConnect(nidaLink: string, targetLink: string, onSuccess?: any, onFailure?: any) {
  try {
    // Api 호출
    const { data } = yield call(authApis.insert, nidaLink, targetLink, 486);

    // 성공 통보
    yield put({ type: 'LINK_STEP3_SUCCESS', data });

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    // 실패 통보
    yield put({ type: 'LINK_STEP3_FAILURE', error });

    if (onFailure) {
      onFailure(error);
    }
  }
}

function* linkRank(onSuccess?: any, onFailure?: any) {
  try {
    // Api 호출
    const { data } = yield call(authApis.rank);

    // 성공 통보
    yield put({ type: 'LINK_RANK_SUCCESS', data });

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    // 실패 통보
    yield put({ type: 'LINK_RANK_FAILURE', error });

    if (onFailure) {
      onFailure(error);
    }
  }
}

export function* watchRecommendDomain() {
  while (true) {
    const { nidaLink, onSuccess, onFailure } = yield take('LINK_STEP1_REQUEST');
    yield fork(recommendDomain, nidaLink, onSuccess, onFailure);
  }
}

export function* watchLinkConnect() {
  while (true) {
    const { nidaLink, targetLink, onSuccess, onFailure } = yield take('LINK_STEP3_REQUEST');
    yield fork(linkConnect, nidaLink, targetLink, onSuccess, onFailure);
  }
}

export function* watchLinkRank() {
  while (true) {
    const { onSuccess, onFailure } = yield take('LINK_RANK_REQUEST');
    yield fork(linkRank, onSuccess, onFailure);
  }
}
