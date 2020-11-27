import axios from 'axios';
import { createAction, ActionType } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';

import { AxiosErrorHandler } from '@/helper';
import { IRole, EditableType } from './reducer';

const FETCH_GET_ROLES_REQUEST = 'Role/FETCH_GET_ROLES_REQUEST';
const FETCH_GET_ROLES_SUCCESS = 'Role/FETCH_GET_ROLES_SUCCESS';
const FETCH_GET_ROLES_FAILURE = 'Role/FETCH_GET_ROLES_FAILURE';
const FETCH_GET_ROLES_BY_ID_REQUEST = 'Role/FETCH_GET_ROLES_BY_ID_REQUEST';
const FETCH_GET_ROLES_BY_ID_SUCCESS = 'Role/FETCH_GET_ROLES_BY_ID_SUCCESS';
const FETCH_GET_ROLES_BY_ID_FAILURE = 'Role/FETCH_GET_ROLES_BY_ID_FAILURE';
const FETCH_PUT_ROLE_REQUEST = 'Role/FETCH_PUT_ROLE_REQUEST';
const FETCH_PUT_ROLE_SUCCESS = 'Role/FETCH_PUT_ROLE_SUCCESS';
const FETCH_PUT_ROLE_FAILURE = 'Role/FETCH_PUT_ROLE_FAILURE';
const SELECT_ROLES = 'Role/SELECT_ROLES';
const SET_EDITABLE_ROLE = 'Role/SET_EDITABLE_ROLE';
const INPUT_EDITABLE_ROLE = 'Role/INPUT_EDITABLE_ROLE';

const fetchGetRolesRequest = createAction(FETCH_GET_ROLES_REQUEST)();
const fetchGetRolesSuccess = createAction(FETCH_GET_ROLES_SUCCESS)<IRole[]>();
const fetchGetRolesFailure = createAction(FETCH_GET_ROLES_FAILURE)();

const fetchGetRolesByIdRequest = createAction(FETCH_GET_ROLES_BY_ID_REQUEST)<
  IRole['id']
>();
const fetchGetRolesByIdSuccess = createAction(
  FETCH_GET_ROLES_BY_ID_SUCCESS
)<IRole>();
const fetchGetRolesByIdFailure = createAction(FETCH_GET_ROLES_BY_ID_FAILURE)();

const fetchPutRoleRequest = createAction(FETCH_PUT_ROLE_REQUEST)<IRole>();
const fetchPutRoleSuccess = createAction(FETCH_PUT_ROLE_SUCCESS)<IRole>();
const fetchPutRoleFailure = createAction(FETCH_PUT_ROLE_FAILURE)();

const selectRoles = createAction(SELECT_ROLES)<IRole[]>();
const setEditableRole = createAction(SET_EDITABLE_ROLE)<IRole>();
const inputEditableRole = createAction(INPUT_EDITABLE_ROLE)<EditableType>();

export const actions = {
  fetchGetRolesRequest,
  fetchGetRolesSuccess,
  fetchGetRolesFailure,
  fetchGetRolesByIdRequest,
  fetchGetRolesByIdSuccess,
  fetchGetRolesByIdFailure,
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
    .get<IRole[]>(`/roles`)
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
    .get<IRole[]>(`/roles/${payload}`)
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchGetRolesByIdSuccess(data));
    yield put(setEditableRole(data));
  } else {
    yield put(fetchGetRolesByIdFailure());
  }
}

function* fetchPutRole(action: ActionType<typeof fetchPutRoleRequest>) {
  const { payload } = action;
  const { id, description, name } = payload;
  const { data, status } = yield axios
    .post<IRole>(`/roles/${id}`, {
      description,
      name,
    })
    .catch(AxiosErrorHandler);

  if (status === 200) {
    yield put(fetchPutRoleSuccess(data));
    yield put(fetchGetRolesByIdSuccess(data));
  } else {
    yield put(fetchPutRoleFailure());
  }
}

export default function* roleSaga() {
  yield takeLatest(FETCH_GET_ROLES_REQUEST, fetchGetRoles);
  yield takeLatest(FETCH_GET_ROLES_BY_ID_REQUEST, fetchGetRolesById);
  yield takeLatest(fetchPutRoleRequest, fetchPutRole);
}
