import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import DetailContentsBox from '@/components/organisms/DetailContentsBox';
import FormGrid, { FormType } from '@/components/organisms/FormGrid';
import useRole from '@/hooks/useRole';
import useAuth from '@/hooks/useAuth';
import useSystem from '@/hooks/useSystem';
import { Role } from '@/redux/Role/reducer';
import { Auth } from '@/redux/Auth/reducer';

const RoleDetailPage = () => {
  const history = useHistory();
  const { showAlert, showConfirm } = useSystem();

  const {
    role,
    inputEditableRole,
    fetchPostRole,
    resetEditableRole,
  } = useRole();
  const { auth, fetchGetAuthorities } = useAuth();

  useEffect(() => {
    fetchGetAuthorities();
  }, [fetchGetAuthorities]);

  useEffect(() => {
    resetEditableRole();
  }, [resetEditableRole]);

  const forms = useMemo(
    (): Partial<Record<keyof Role, FormType>> => ({
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

  const goBack = async () => {
    history.goBack();
  };

  const confirmCallback = async () => {
    showConfirm({
      message: '등록하시겠습니까?',
      callback() {
        fetchPostRole(role.editableRole as Role);
      },
    });
  };

  return (
    <DetailContentsBox
      title="역할관리 상세"
      icon="table_rows"
      backClickCallback={goBack}
      cancleCallback={goBack}
      confirmCallback={confirmCallback}
      contentsWritableMode
    >
      <FormGrid
        data={role.editableRole}
        forms={forms}
        inputHandler={inputEditableRole}
      />
    </DetailContentsBox>
  );
};

export default RoleDetailPage;
