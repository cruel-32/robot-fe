import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '@/redux';
import AuthStore from '@/redux/Auth';

export default function useAuth() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const fetchGetAuthorities = useCallback(
    () => dispatch(AuthStore.actions.fetchGetAuthoritiesRequest()),
    [dispatch]
  );
  return {
    auth,
    fetchGetAuthorities,
  };
}
