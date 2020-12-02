import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '@/redux';
import Account from '@/redux/Account';

export default function useAccount() {
  const account = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();

  const fetchGetLoggedInfo = useCallback(
    () => dispatch(Account.actions.fetchGetLoggedInfoRequest()),
    [dispatch]
  );

  const fetchLogin = useCallback(
    (param) => dispatch(Account.actions.fetchLoginRequest(param)),
    [dispatch]
  );

  const fetchLogout = useCallback(
    () => dispatch(Account.actions.fetchLogoutRequest()),
    [dispatch]
  );

  return {
    account,
    fetchGetLoggedInfo,
    fetchLogin,
    fetchLogout,
  };
}
