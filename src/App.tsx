import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { defaultTheme } from '@/theme';
import LeftMenuTemplate from '@/components/template/LeftMenuTemplate';

import Router from '@/router';
import SystemAlert from '@/components/molecules/SystemAlert';
import SystemConfirm from '@/components/molecules/SystemConfirm';

const App = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LeftMenuTemplate>
          <Router />
          <SystemAlert />
          <SystemConfirm />
        </LeftMenuTemplate>
      </BrowserRouter>
    </ThemeProvider>
  </MuiPickersUtilsProvider>
);

export default App;
