/* eslint-disable func-names */
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import account from '@/redux/Account';
import role from '@/redux/Role';

export const rootReducer = combineReducers({
  account: account.reducer,
  role: role.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const rootSaga = function* () {
  yield all([account.saga(), role.saga()]);
};
