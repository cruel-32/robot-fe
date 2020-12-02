/* eslint-disable operator-linebreak */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { createReducer } from 'typesafe-actions';

import { ActionsType } from './actions';

export type State = {
  message?: string;
  isDisplayAlert?: boolean;
  isDisplayConfirm?: boolean;
  callback?: (data?: any) => any;
  cancelCallback?: (data?: any) => any;
};

export const initialState: State = {
  message: undefined,
  isDisplayAlert: undefined,
  isDisplayConfirm: undefined,
  callback: undefined,
  cancelCallback: undefined,
};

export default createReducer<State, ActionsType>(initialState, {
  'system/SHOW_ALERT': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      const { message, callback } = action.payload;
      draft.isDisplayAlert = true;
      draft.message = message;
      draft.callback = callback;
    });
  },
  'system/SHOW_CONFIRM': function (state, action) {
    return produce(state, (draft: Draft<State>) => {
      const { message, callback, cancelCallback } = action.payload;
      draft.isDisplayConfirm = true;
      draft.message = message;
      draft.callback = typeof callback === 'function' ? callback : undefined;
      draft.cancelCallback = cancelCallback;
    });
  },
  'system/HIDE_ALERT': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.isDisplayAlert = false;
    });
  },
  'system/HIDE_CONFIRM': function (state) {
    return produce(state, (draft: Draft<State>) => {
      draft.isDisplayConfirm = false;
    });
  },
});
