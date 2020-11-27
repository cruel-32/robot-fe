import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '@/redux';
import { IRole } from '@/redux/Role/reducer';
import Role from '@/redux/Role';

export default function useCounter() {
  const role = useSelector((state: RootState) => state.role);
  const dispatch = useDispatch();

  const fetchGetRoles = useCallback(
    () => dispatch(Role.actions.fetchGetRolesRequest()),
    [dispatch]
  );

  const fetchGetRolesById = useCallback(
    (id: IRole['id']) => dispatch(Role.actions.fetchGetRolesByIdRequest(id)),
    [dispatch]
  );

  const fetchPutRole = useCallback(
    (param: IRole) => dispatch(Role.actions.fetchPutRoleRequest(param)),
    [dispatch]
  );

  const selectRoles = useCallback(
    (list: IRole[]) => {
      dispatch(Role.actions.selectRoles(list));
    },
    [dispatch]
  );

  const setEditableRole = useCallback(
    (param: IRole) => {
      dispatch(Role.actions.setEditableRole(param));
    },
    [dispatch]
  );

  const inputEditableRole = useCallback(
    ({ name, value }) => {
      dispatch(Role.actions.inputEditableRole({ name, value }));
    },
    [dispatch]
  );

  const resetEditableRole = useCallback(() => {
    dispatch(
      Role.actions.setEditableRole(
        role.selected || {
          id: 0,
          name: '',
          description: '',
        }
      )
    );
  }, [dispatch]);
  return {
    role,
    fetchGetRoles,
    fetchGetRolesById,
    fetchPutRole,
    selectRoles,
    setEditableRole,
    inputEditableRole,
    resetEditableRole,
  };
}
