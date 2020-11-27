import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  defaultTheme,
  materialDefaultTheme,
  MaterialThemeProvider,
} from '@/theme';

import LeftMenuTemplate from '@/components/template/LeftMenuTemplate';
import RootPage from '@/components/pages/RootPage';
import RolePage from '@/components/pages/Role';
import RoleDetailPage from '@/components/pages/Role/detail';
import AccountPage from '@/components/pages/Account';
import AccountDetailPage from '@/components/pages/Account/detail';

const App = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ThemeProvider theme={defaultTheme}>
      <MaterialThemeProvider theme={materialDefaultTheme}>
        <BrowserRouter>
          <LeftMenuTemplate>
            <Switch>
              <Route path="/" exact>
                <RootPage />
              </Route>
              <Route path="/role/:id">
                <RoleDetailPage />
              </Route>
              <Route path="/role">
                <RolePage />
              </Route>
              <Route path="/account/:id">
                <AccountDetailPage />
              </Route>
              <Route path="/account">
                <AccountPage />
              </Route>
            </Switch>
          </LeftMenuTemplate>
        </BrowserRouter>
      </MaterialThemeProvider>
    </ThemeProvider>
  </MuiPickersUtilsProvider>
);

export default App;
