import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useRole from '@/hooks/useRole';
import DetailContentsBox from '@/components/organisms/DetailContentsBox';
import DetailGrid, { DetailColumn } from '@/components/organisms/DetailGrid';

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

const AccountDetailPage = () => {
  const { role, fetchGetRolesById } = useRole();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchGetRolesById(parseInt(id, 10));
    }
  }, []);

  const modifyCallback = () => {
    console.log('modify');
  };

  return (
    <DetailContentsBox
      title="역할관리 상세"
      icon="table_rows"
      modifyCallback={modifyCallback}
    >
      <DetailGrid detailColumns={detailColumns} data={role.selected} />
    </DetailContentsBox>
  );
};

export default AccountDetailPage;
