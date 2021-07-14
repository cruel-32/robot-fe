/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ListContentsBox, {
  SelectionChangeParams,
  CellParams,
} from '@/components/organisms/ListContentsBox';

import { Role } from '@/redux/Role/reducer';
import useRole from '@/hooks/useRole';
import useSystem from '@/hooks/useSystem';

const RoleColumns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'name', width: 250 },
  { field: 'description', headerName: 'description', width: 400 },
];

const RolePage = () => {
  const history = useHistory();
  const { role, fetchGetRoles, selectRoles } = useRole();
  const { showAlert, showConfirm } = useSystem();

  useEffect(() => {
    fetchGetRoles();
  }, [fetchGetRoles]);

  const onSelectionChange = (data: SelectionChangeParams) => {
    const selectedRoles = role.list.filter((item: Role) =>
      data.rowIds.includes(item.id.toString())
    );

    selectRoles(selectedRoles);
  };

  const addClickCallback = () => {
    console.log('go add page');
    history.push(`/role/write`);
  };

  const confirmCallback = () => {
    console.log('delete');
  };

  const onCellClick = (cellData: CellParams) => {
    const { row } = cellData;

    if (row) {
      history.push(`/role/detail/${row.id}`);
    }
  };

  const alertTest = () => {
    showAlert({
      message: '메세지 테스트',
      callback(data: any) {
        console.log('role data : ', data);
        console.log('role : ', role.list?.[0].name);
      },
    });
  };
  const confirmTest = () => {
    showConfirm({
      message: '메세지 테스트',
      callback(data: any) {
        console.log('role data : ', data);
        console.log('role : ', role.list?.[0].name);
      },
    });
  };

  return (
    <>
      <button type="button" onClick={alertTest}>
        alert
      </button>
      <button type="button" onClick={confirmTest}>
        confirm
      </button>
      <ListContentsBox
        title="역할관리 리스트"
        icon="table_rows"
        columns={RoleColumns}
        rows={role.list}
        addClickCallback={addClickCallback}
        onSelectionChange={onSelectionChange}
        confirmCallback={confirmCallback}
        onCellClick={onCellClick}
      />
    </>
  );
};

export default RolePage;
