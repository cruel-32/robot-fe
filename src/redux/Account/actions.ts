import axios from 'axios';
import { createAction, ActionType } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';

import { AxiosErrorHandler } from '@/helper';
import { IAccount } from './reducer';

type LoginParam = {
  username: string;
  password: string;
};
const FETCH_LOGIN_REQUEST = 'account/FETCH_LOGIN_REQUEST';
const FETCH_LOGIN_FAILURE = 'account/FETCH_LOGIN_FAILURE';
const fetchLoginRequest = createAction(FETCH_LOGIN_REQUEST)<LoginParam>();
const fetchLoginFailure = createAction(FETCH_LOGIN_FAILURE)();

const FETCH_GET_LOGGED_INFO_REQUEST = 'account/FETCH_GET_LOGGED_INFO_REQUEST';
const FETCH_GET_LOGGED_INFO_SUCCESS = 'account/FETCH_GET_LOGGED_INFO_SUCCESS';
const FETCH_GET_LOGGED_INFO_FAILURE = 'account/FETCH_GET_LOGGED_INFO_FAILURE';
const fetchGetLoggedInfoRequest = createAction(FETCH_GET_LOGGED_INFO_REQUEST)();
const fetchGetLoggedInfoSuccess = createAction(
  FETCH_GET_LOGGED_INFO_SUCCESS
)<IAccount>();
const fetchGetLoggedInfoFailure = createAction(FETCH_GET_LOGGED_INFO_FAILURE)();

const FETCH_LOGOUT_REQUEST = 'account/FETCH_LOGOUT_REQUEST';
const FETCH_LOGOUT_SUCCESS = 'account/FETCH_LOGOUT_SUCCESS';
const fetchLogoutRequest = createAction(FETCH_LOGOUT_REQUEST)();
const fetchLogoutSuccess = createAction(FETCH_LOGOUT_SUCCESS)();

export const actions = {
  fetchLoginRequest,
  fetchLoginFailure,
  fetchGetLoggedInfoRequest,
  fetchGetLoggedInfoSuccess,
  fetchGetLoggedInfoFailure,
  fetchLogoutRequest,
  fetchLogoutSuccess,
};

export type ActionsType = ActionType<typeof actions>;

// redux-saga
function* fetchLogin(action: ActionType<typeof fetchLoginRequest>) {
  const { payload } = action;
  const formData = new FormData();
  formData.append('username', payload.username);
  formData.append('password', payload.password);

  const { status } = yield axios
    .post(`/login`, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*',
      },
    })
    .catch(AxiosErrorHandler);

  if (status && status === 200) {
    yield put(fetchGetLoggedInfoRequest());
  } else {
    yield put(fetchLoginFailure());
  }
}

function* fetchGetLoggedInfo() {
  const { data } = yield axios.get(`/session`).catch(AxiosErrorHandler);
  if (data) {
    yield put(fetchGetLoggedInfoSuccess(data));
  } else {
    yield put(fetchGetLoggedInfoFailure());
  }
}

function* fetchLogout() {
  const { status } = yield axios.get(`/logout`).catch(AxiosErrorHandler);
  if (status && status === 200) {
    yield put(fetchLogoutSuccess());
  }
}

export default function* roleSaga() {
  yield takeLatest(FETCH_LOGIN_REQUEST, fetchLogin);
  yield takeLatest(FETCH_GET_LOGGED_INFO_REQUEST, fetchGetLoggedInfo);
  yield takeLatest(FETCH_LOGOUT_REQUEST, fetchLogout);
}
