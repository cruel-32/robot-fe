/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import MenuList, { MenuListProps } from '@/components/molecules/MenuList';

import LoginBox from '@/components/organisms/LoginBox';
import LogoutBox from '@/components/organisms/LogoutBox';
import useAccount from '@/hooks/useAccount';

const items: MenuListProps['items'] = [
  {
    to: '/',
    text: 'HOME',
  },
  {
    to: '/role',
    text: '역할관리',
  },
  {
    to: '/account',
    text: '계정관리',
  },
];

const SideHeader = () => {
  const { account, fetchGetLoggedInfo } = useAccount();
  useEffect(() => {
    fetchGetLoggedInfo();
  }, []);

  return (
    <div>
      {account.logged ? <LogoutBox /> : <LoginBox />}
      <MenuList items={items} />
    </div>
  );
};

export default SideHeader;
