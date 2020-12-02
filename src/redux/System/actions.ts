/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createAction, ActionType } from 'typesafe-actions';

const SHOW_ALERT = 'system/SHOW_ALERT';
const SHOW_CONFIRM = 'system/SHOW_CONFIRM';
const HIDE_ALERT = 'system/HIDE_ALERT';
const HIDE_CONFIRM = 'system/HIDE_CONFIRM';

const showAlert = createAction(SHOW_ALERT)<{
  message: string;
  callback?: (data?: any) => any;
}>();

const showConfirm = createAction(SHOW_CONFIRM)<{
  message: string;
  callback?: (data: any) => any;
  cancelCallback?: (data?: any) => any;
}>();

const hideAlert = createAction(HIDE_ALERT)();
const hideConfirm = createAction(HIDE_CONFIRM)();

export const actions = {
  showAlert,
  showConfirm,
  hideAlert,
  hideConfirm,
};

export type ActionsType = ActionType<typeof actions>;

export default function* systemSaga() {}
