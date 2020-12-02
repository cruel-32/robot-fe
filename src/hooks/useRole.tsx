import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '@/redux';
import { Role } from '@/redux/Role/reducer';
import RoleStore from '@/redux/Role';

export default function useRole() {
  const role = useSelector((state: RootState) => state.role);
  const dispatch = useDispatch();

  const fetchGetRoles = useCallback(
    () => dispatch(RoleStore.actions.fetchGetRolesRequest()),
    [dispatch]
  );

  const fetchGetRolesById = useCallback(
    (id: Role['id']) =>
      dispatch(RoleStore.actions.fetchGetRolesByIdRequest(id)),
    [dispatch]
  );

  const fetchPostRole = useCallback(
    (param: Role) => dispatch(RoleStore.actions.fetchPostRoleRequest(param)),
    [dispatch]
  );

  const fetchPutRole = useCallback(
    (param: Role) => dispatch(RoleStore.actions.fetchPutRoleRequest(param)),
    [dispatch]
  );

  const selectRoles = useCallback(
    (list: Role[]) => {
      dispatch(RoleStore.actions.selectRoles(list));
    },
    [dispatch]
  );

  const setEditableRole = useCallback(
    (param: Role) => {
      dispatch(RoleStore.actions.setEditableRole(param));
    },
    [dispatch]
  );

  const inputEditableRole = useCallback(
    ({ name, value }) => {
      dispatch(RoleStore.actions.inputEditableRole({ name, value }));
    },
    [dispatch]
  );

  const resetEditableRole = useCallback(() => {
    dispatch(
      RoleStore.actions.setEditableRole({
        id: undefined,
        name: '',
        description: '',
      })
    );
  }, [dispatch]);
  return {
    role,
    fetchGetRoles,
    fetchGetRolesById,
    fetchPostRole,
    fetchPutRole,
    selectRoles,
    setEditableRole,
    inputEditableRole,
    resetEditableRole,
  };
}
