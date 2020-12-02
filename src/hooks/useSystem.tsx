import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '@/redux';
import SystemStore from '@/redux/System';

export default function useSystem() {
  const system = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch();

  const showAlert = useCallback(
    ({
      message,
      callback,
    }: {
      message: string;
      callback?: (data?: any) => any;
    }) => dispatch(SystemStore.actions.showAlert({ message, callback })),
    [dispatch]
  );

  const showConfirm = useCallback(
    ({
      message,
      callback,
      cancelCallback,
    }: {
      message: string;
      callback?: (data?: any) => any;
      cancelCallback?: (data?: any) => any;
    }) =>
      dispatch(
        SystemStore.actions.showConfirm({ message, callback, cancelCallback })
      ),
    [dispatch]
  );
  const hideAlert = useCallback(
    () => dispatch(SystemStore.actions.hideAlert()),
    [dispatch]
  );

  const hideConfirm = useCallback(
    () => dispatch(SystemStore.actions.hideConfirm()),
    [dispatch]
  );

  return {
    system,
    showAlert,
    showConfirm,
    hideAlert,
    hideConfirm,
  };
}
