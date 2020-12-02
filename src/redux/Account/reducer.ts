/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import produce, { Draft } from 'immer';
import { createReducer } from 'typesafe-actions';

import { ActionsType } from './actions';

export type IAccount = {
  id: number;
  createdAt: string;
  createdBy: {
    id: number;
  };
  updatedAt: string;
  updatedBy: {
    id: number;
  };
  email: string;
  loginId: string;
  name: string;
  phone: string;
  workGroup: string;
  roles: { id: number }[];
  password?: string;
};

export type State = {
  logged?: IAccount;
  list: IAccount[];
};

export const initialState: State = {
  logged: undefined,
  list: [],
};

export default createReducer<State, ActionsType>(initialState, {
  'account/FETCH_LOGIN_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.logged = undefined;
    });
  },
  'account/FETCH_GET_LOGGED_INFO_SUCCESS': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.logged = action.payload;
    });
  },
  'account/FETCH_GET_LOGGED_INFO_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.logged = undefined;
    });
  },
  'account/FETCH_LOGOUT_SUCCESS': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.logged = undefined;
    });
  },
});
