/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import produce, { Draft } from 'immer';
import { createReducer } from 'typesafe-actions';

import { ActionsType } from './actions';

export type IRole = {
  description?: string;
  id: number;
  name?: string;
};

export type State = {
  selected?: IRole;
  editableRole: IRole;
  list: IRole[];
  selectedList: IRole[];
};

export const initialState: State = {
  selected: undefined,
  editableRole: {
    description: '',
    id: 0,
    name: '',
  },
  list: [],
  selectedList: [],
};

// export type EditableType = {
//   name: keyof IRole;
//   value: IRole[keyof IRole];
// };
export type EditableType = {
  name: keyof Omit<IRole, 'id'>;
  value: IRole[keyof Omit<IRole, 'id'>];
};

export default createReducer<State, ActionsType>(initialState, {
  'Role/FETCH_GET_ROLES_SUCCESS': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.list = action.payload;
    });
  },
  'Role/FETCH_GET_ROLES_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.list = [];
    });
  },
  'Role/FETCH_GET_ROLES_BY_ID_SUCCESS': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.selected = action.payload;
    });
  },
  'Role/FETCH_GET_ROLES_BY_ID_FAILURE': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.selected = undefined;
    });
  },
  'Role/SELECT_ROLES': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.selectedList = action.payload;
    });
  },
  'Role/SET_EDITABLE_ROLE': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      draft.editableRole = action.payload;
    });
  },
  'Role/INPUT_EDITABLE_ROLE': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      const { name, value } = action.payload;
      draft.editableRole[name] = value as never;
    });
  },
});
