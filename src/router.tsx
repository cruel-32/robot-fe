import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RootPage from '@/components/pages/RootPage';
import RolePage from '@/components/pages/Role';
import RoleWritePage from '@/components/pages/Role/write';
import RoleDetailPage from '@/components/pages/Role/detail';
import AccountPage from '@/components/pages/Account';
import AccountDetailPage from '@/components/pages/Account/detail';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <RootPage />
      </Route>
      <Route path="/role/write">
        <RoleWritePage />
      </Route>
      <Route path="/role/detail/:id">
        <RoleDetailPage />
      </Route>
      <Route path="/role">
        <RolePage />
      </Route>
      <Route path="/account/detail/:id">
        <AccountDetailPage />
      </Route>
      <Route path="/account">
        <AccountPage />
      </Route>
    </Switch>
  );
}
