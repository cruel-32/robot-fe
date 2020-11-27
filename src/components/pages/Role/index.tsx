/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ListContentsBox, {
  SelectionChangeParams,
  CellParams,
} from '@/components/organisms/ListContentsBox';

import { IRole } from '@/redux/Role/reducer';
import useRole from '@/hooks/useRole';

const RoleColumns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'name', width: 250 },
  { field: 'description', headerName: 'description', width: 400 },
];

const RolePage = () => {
  const histroy = useHistory();
  const { role, fetchGetRoles, selectRoles } = useRole();

  useEffect(() => {
    fetchGetRoles();
  }, []);

  const onSelectionChange = (data: SelectionChangeParams) => {
    const selectedRoles = role.list.filter((item: IRole) =>
      data.rowIds.includes(item.id.toString())
    );

    selectRoles(selectedRoles);
  };

  const confirmCallback = () => {
    console.log('delete');
  };

  const onCellClick = (cellData: CellParams) => {
    const { data } = cellData;

    if (data) {
      histroy.push(`/role/${data.id}`);
    }
  };

  const modifyClickCallback = () => {
    console.log(
      '🚀 ~ file: index.tsx ~ line 40 ~ modifyClickCallback ~ role',
      role
    );
    if (Array.isArray(role.selectedList) && role.selectedList?.length === 1) {
      const [selectedRole] = role.selectedList;
      histroy.push(`/role/${selectedRole.id}`);
    } else {
      alert('하나의 row를 선택하세요');
    }
  };

  return (
    <ListContentsBox
      title="역할관리 리스트"
      icon="table_rows"
      columns={RoleColumns}
      rows={role.list}
      modifyClickCallback={modifyClickCallback}
      onSelectionChange={onSelectionChange}
      confirmCallback={confirmCallback}
      onCellClick={onCellClick}
    />
  );
};

export default RolePage;
