import axios from 'axios';
import { createAction, ActionType } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';

import { AxiosErrorHandler } from '@/helper';
import { Auth } from './reducer';

const FETCH_GET_AUTHORITIES_REQUEST = 'auth/FETCH_GET_AUTHORITIES_REQUEST';
const FETCH_GET_AUTHORITIES_SUCCESS = 'auth/FETCH_GET_AUTHORITIES_SUCCESS';
const FETCH_GET_AUTHORITIES_FAILURE = 'auth/FETCH_GET_AUTHORITIES_FAILURE';

const fetchGetAuthoritiesRequest = createAction(
  FETCH_GET_AUTHORITIES_REQUEST
)();
const fetchGetAuthoritiesSuccess = createAction(FETCH_GET_AUTHORITIES_SUCCESS)<
  Auth[]
>();
const fetchGetAuthoritiesFailure = createAction(
  FETCH_GET_AUTHORITIES_FAILURE
)();

export const actions = {
  fetchGetAuthoritiesRequest,
  fetchGetAuthoritiesSuccess,
  fetchGetAuthoritiesFailure,
};

export type ActionsType = ActionType<typeof actions>;

// redux-saga
function* fetchGetAuthorities() {
  const { data, status } = yield axios
    .get<Auth[]>(`/authorities`)
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchGetAuthoritiesSuccess(data));
  } else {
    yield put(fetchGetAuthoritiesFailure());
  }
}

export default function* roleSaga() {
  yield takeLatest(FETCH_GET_AUTHORITIES_REQUEST, fetchGetAuthorities);
}
