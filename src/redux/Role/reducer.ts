/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import produce, { Draft } from 'immer';
import { createReducer } from 'typesafe-actions';

import { ActionsType } from './actions';

export type Role = {
  description?: string;
  id: number;
  name?: string;
  authorities?: string[];
};

export type State = {
  selected?: Role;
  editableRole: Partial<Role>;
  list: Role[];
  selectedList: Role[];
};

export const initialState: State = {
  selected: undefined,
  editableRole: {
    description: '',
    id: 0,
    name: '',
    authorities: [],
  },
  list: [],
  selectedList: [],
};

// export type EditableType = {
//   name: keyof Role;
//   value: Role[keyof Role];
// };
export type EditableType = {
  name: keyof Omit<Role, 'id'>;
  value: Role[keyof Omit<Role, 'id'>];
};

export default createReducer<State, ActionsType>(initialState, {
  'role/FETCH_GET_ROLES_SUCCESS': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.list = action.payload;
    });
  },
  'role/FETCH_GET_ROLES_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.list = [];
    });
  },
  'role/FETCH_GET_ROLES_BY_ID_SUCCESS': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.selected = action.payload;
    });
  },
  'role/FETCH_GET_ROLES_BY_ID_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.selected = undefined;
    });
  },
  'role/SELECT_ROLES': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.selectedList = action.payload;
    });
  },
  'role/SET_EDITABLE_ROLE': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.editableRole = action.payload;
    });
  },
  'role/INPUT_EDITABLE_ROLE': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      const { name, value } = action.payload;
      draft.editableRole[name] = value as never;
    });
  },
});
