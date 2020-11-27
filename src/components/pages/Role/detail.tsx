import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailContentsBox from '@/components/organisms/DetailContentsBox';
import DetailGrid, { DetailColumn } from '@/components/organisms/DetailGrid';
import FormGrid, { FormType } from '@/components/organisms/FormGrid';
import useRole from '@/hooks/useRole';
import { IRole } from '@/redux/Role/reducer';

const detailColumns: DetailColumn[] = [
  {
    field: 'id',
    text: '아이디',
  },
  {
    field: 'name',
    text: '이름',
  },
  {
    field: 'description',
    text: '설명',
  },
];

const forms: Record<keyof IRole, FormType> = {
  id: {
    form: 'input',
    type: 'text',
    label: '아이디',
    disabled: true,
  },
  name: {
    form: 'input',
    type: 'text',
    label: '이름',
  },
  description: {
    form: 'textarea',
    label: '설명',
    options: {
      rows: 1,
      rowsMax: 3,
    },
  },
};

const RoleDetailPage = () => {
  const {
    role,
    fetchGetRolesById,
    inputEditableRole,
    fetchPutRole,
  } = useRole();
  const { id } = useParams<{ id: string }>();
  const [modifyMode, setModifyMode] = useState(false);

  useEffect(() => {
    if (id) {
      fetchGetRolesById(parseInt(id, 10));
    }
  }, [id]);

  const modifyCallback = async () => {
    fetchPutRole(role.editableRole);
  };

  const changeMode = (mode: boolean) => {
    setModifyMode(mode);
  };

  useEffect(() => {
    setModifyMode(false);
  }, [role.selected]);

  return (
    <DetailContentsBox
      title="역할관리 상세"
      icon="table_rows"
      modifyCallback={modifyCallback}
      contentsWritableMode={modifyMode}
      modeChangeHandler={changeMode}
    >
      {!modifyMode ? (
        <DetailGrid detailColumns={detailColumns} data={role.selected} />
      ) : (
        <FormGrid
          data={role.editableRole}
          forms={forms}
          inputHandler={inputEditableRole}
        />
      )}
    </DetailContentsBox>
  );
};

export default RoleDetailPage;
