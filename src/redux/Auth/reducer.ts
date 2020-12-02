/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import produce, { Draft } from 'immer';
import { createReducer } from 'typesafe-actions';

import { ActionsType } from './actions';

export type Auth = {
  id: number;
  authority?: string;
};

export type State = {
  list: Auth[];
};

export const initialState: State = {
  list: [],
};

export default createReducer<State, ActionsType>(initialState, {
  'auth/FETCH_GET_AUTHORITIES_SUCCESS': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.list = action.payload;
    });
  },
  'auth/FETCH_GET_AUTHORITIES_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.list = [];
    });
  },
});
