import React, { useEffect, useState, useMemo, memo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import DetailContentsBox from '@/components/organisms/DetailContentsBox';
import DetailGrid, { DetailColumn } from '@/components/organisms/DetailGrid';
import FormGrid, { FormType } from '@/components/organisms/FormGrid';
import useRole from '@/hooks/useRole';
import useAuth from '@/hooks/useAuth';
import useSystem from '@/hooks/useSystem';
import { Role } from '@/redux/Role/reducer';
// import { Auth } from '@/redux/Auth/reducer';

const MemoDetailGrid = memo(DetailGrid);
const MemoFormGrid = memo(FormGrid);

const detailColumns: DetailColumn[] = [
  {
    field: 'id',
    label: '아이디',
  },
  {
    field: 'name',
    label: '이름',
  },
  {
    field: 'description',
    label: '설명',
  },
  {
    field: 'authorities',
    label: '권한',
  },
];

const RoleDetailPage = () => {
  const history = useHistory();
  const { showAlert, showConfirm } = useSystem();
  const { auth, fetchGetAuthorities } = useAuth();

  const {
    role,
    fetchGetRolesById,
    inputEditableRole,
    fetchPutRole,
  } = useRole();
  const { id } = useParams<{ id: string }>();
  const [modifyMode, setModifyMode] = useState(false);

  useEffect(() => {
    console.log('fetchGetRolesById');
    if (id) {
      fetchGetRolesById(parseInt(id, 10));
    }
  }, [id, fetchGetRolesById]);

  useEffect(() => {
    console.log('fetchGetAuthorities');
    fetchGetAuthorities();
  }, [fetchGetAuthorities]);

  useEffect(() => {
    setModifyMode(false);
  }, [role.selected]);

  const forms = useMemo(
    (): Partial<Record<keyof Role, FormType>> => ({
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
      authorities: {
        form: 'select.multiple',
        label: '권한',
        items: [
          { value: 'super.admin', text: 'super.admin' },
          { value: 'super.admin1', text: 'super.admin1' },
          { value: 'super.admin2', text: 'super.admin2' },
          { value: 'super.admin3', text: 'super.admin3' },
        ],
        // items: auth.list.map((item: Auth) => ({
        //   value: item.id,
        //   text: item.authority || '',
        // })),
      },
    }),
    [auth.list]
  );

  const goBack = () => {
    history.goBack();
  };

  const confirmCallback = () => {
    showConfirm({
      message: '정말 수정하시겠습니까?',
      callback() {
        const result = fetchPutRole(role.editableRole as Role);
        console.log('result', result);
      },
    });
  };

  const modifyClickCallback = () => {
    setModifyMode(true);
  };

  const cancleCallback = () => {
    setModifyMode(false);
  };

  return (
    <DetailContentsBox
      title="역할관리 상세"
      icon="table_rows"
      backClickCallback={goBack}
      confirmCallback={confirmCallback}
      contentsWritableMode={modifyMode}
      modifyClickCallback={modifyClickCallback}
      cancleCallback={cancleCallback}
    >
      {!modifyMode ? (
        <MemoDetailGrid detailColumns={detailColumns} data={role.selected} />
      ) : (
        <MemoFormGrid
          data={role.editableRole}
          forms={forms}
          inputHandler={inputEditableRole}
        />
      )}
    </DetailContentsBox>
  );
};

export default RoleDetailPage;
