import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useRole from '@/hooks/useRole';
import DetailContentsBox from '@/components/organisms/DetailContentsBox';
import DetailGrid, { DetailColumn } from '@/components/organisms/DetailGrid';

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

const AccountDetailPage = () => {
  const { role, fetchGetRolesById } = useRole();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchGetRolesById(parseInt(id, 10));
    }
  }, [id, fetchGetRolesById]);

  const confirmCallback = () => {
    console.log('modify');
  };

  return (
    <DetailContentsBox
      title="역할관리 상세"
      icon="table_rows"
      confirmCallback={confirmCallback}
    >
      <DetailGrid detailColumns={detailColumns} data={role.selected} />
    </DetailContentsBox>
  );
};

export default AccountDetailPage;
