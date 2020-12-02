import axios from 'axios';
import { createAction, ActionType } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';

import { AxiosErrorHandler } from '@/helper';
import { actions as SystemActions } from '@/redux/System/actions';
import { Role, EditableType } from './reducer';

const FETCH_GET_ROLES_REQUEST = 'role/FETCH_GET_ROLES_REQUEST';
const FETCH_GET_ROLES_SUCCESS = 'role/FETCH_GET_ROLES_SUCCESS';
const FETCH_GET_ROLES_FAILURE = 'role/FETCH_GET_ROLES_FAILURE';
const FETCH_GET_ROLES_BY_ID_REQUEST = 'role/FETCH_GET_ROLES_BY_ID_REQUEST';
const FETCH_GET_ROLES_BY_ID_SUCCESS = 'role/FETCH_GET_ROLES_BY_ID_SUCCESS';
const FETCH_GET_ROLES_BY_ID_FAILURE = 'role/FETCH_GET_ROLES_BY_ID_FAILURE';
const FETCH_POST_ROLE_REQUEST = 'role/FETCH_POST_ROLE_REQUEST';
const FETCH_POST_ROLE_SUCCESS = 'role/FETCH_POST_ROLE_SUCCESS';
const FETCH_POST_ROLE_FAILURE = 'role/FETCH_POST_ROLE_FAILURE';
const FETCH_PUT_ROLE_REQUEST = 'role/FETCH_PUT_ROLE_REQUEST';
const FETCH_PUT_ROLE_SUCCESS = 'role/FETCH_PUT_ROLE_SUCCESS';
const FETCH_PUT_ROLE_FAILURE = 'role/FETCH_PUT_ROLE_FAILURE';
const SELECT_ROLES = 'role/SELECT_ROLES';
const SET_EDITABLE_ROLE = 'role/SET_EDITABLE_ROLE';
const INPUT_EDITABLE_ROLE = 'role/INPUT_EDITABLE_ROLE';

const fetchGetRolesRequest = createAction(FETCH_GET_ROLES_REQUEST)();
const fetchGetRolesSuccess = createAction(FETCH_GET_ROLES_SUCCESS)<Role[]>();
const fetchGetRolesFailure = createAction(FETCH_GET_ROLES_FAILURE)();

const fetchGetRolesByIdRequest = createAction(FETCH_GET_ROLES_BY_ID_REQUEST)<
  Role['id']
>();
const fetchGetRolesByIdSuccess = createAction(
  FETCH_GET_ROLES_BY_ID_SUCCESS
)<Role>();
const fetchGetRolesByIdFailure = createAction(FETCH_GET_ROLES_BY_ID_FAILURE)();

const fetchPostRoleRequest = createAction(FETCH_POST_ROLE_REQUEST)<
  Omit<Role, 'id'>
>();
const fetchPostRoleSuccess = createAction(FETCH_POST_ROLE_SUCCESS)<Role>();
const fetchPostRoleFailure = createAction(FETCH_POST_ROLE_FAILURE)();

const fetchPutRoleRequest = createAction(FETCH_PUT_ROLE_REQUEST)<Role>();
const fetchPutRoleSuccess = createAction(FETCH_PUT_ROLE_SUCCESS)<Role>();
const fetchPutRoleFailure = createAction(FETCH_PUT_ROLE_FAILURE)();

const selectRoles = createAction(SELECT_ROLES)<Role[]>();
const setEditableRole = createAction(SET_EDITABLE_ROLE)<Partial<Role>>();
const inputEditableRole = createAction(INPUT_EDITABLE_ROLE)<EditableType>();

export const actions = {
  fetchGetRolesRequest,
  fetchGetRolesSuccess,
  fetchGetRolesFailure,
  fetchGetRolesByIdRequest,
  fetchGetRolesByIdSuccess,
  fetchGetRolesByIdFailure,
  fetchPostRoleRequest,
  fetchPostRoleSuccess,
  fetchPostRoleFailure,
  fetchPutRoleRequest,
  fetchPutRoleSuccess,
  fetchPutRoleFailure,
  selectRoles,
  setEditableRole,
  inputEditableRole,
};

export type ActionsType = ActionType<typeof actions>;

// redux-saga
function* fetchGetRoles() {
  const { data, status } = yield axios
    .get<Role[]>(`/roles`)
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchGetRolesSuccess(data));
  } else {
    yield put(fetchGetRolesFailure());
  }
}

function* fetchGetRolesById(
  action: ActionType<typeof fetchGetRolesByIdRequest>
) {
  const { payload } = action;
  const { data, status } = yield axios
    .get<Role[]>(`/roles/${payload}`)
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchGetRolesByIdSuccess(data));
    yield put(setEditableRole(data));
  } else {
    yield put(fetchGetRolesByIdFailure());
  }
}

function* fetchPostRole(action: ActionType<typeof fetchPostRoleRequest>) {
  const { payload } = action;
  const { data, status } = yield axios
    .post<Role>(`/roles/`, payload)
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchPostRoleSuccess(data));
    yield put(fetchGetRolesByIdSuccess(data));
    yield put(
      SystemActions.showAlert({
        message: '등록하였습니다.',
      })
    );
  } else {
    yield put(fetchPostRoleFailure());
  }
}

function* fetchPutRole(action: ActionType<typeof fetchPutRoleRequest>) {
  const { payload } = action;
  const { id, description, name, authorities } = payload;
  const { data, status } = yield axios
    .put<Role>(`/roles/${id}`, {
      description,
      name,
      authorities,
    })
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchPutRoleSuccess(data));
    yield put(fetchGetRolesByIdSuccess(data));
    yield put(
      SystemActions.showAlert({
        message: '수정하였습니다.',
      })
    );
  } else {
    yield put(fetchPutRoleFailure());
  }
}

export default function* roleSaga() {
  yield takeLatest(FETCH_GET_ROLES_REQUEST, fetchGetRoles);
  yield takeLatest(FETCH_GET_ROLES_BY_ID_REQUEST, fetchGetRolesById);
  yield takeLatest(fetchPostRoleRequest, fetchPostRole);
  yield takeLatest(fetchPutRoleRequest, fetchPutRole);
}
