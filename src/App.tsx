import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CssBaseline from '@/components/atoms/CssBaseline';
import { rootStore, Provider } from '@/stores';
import {
  defaultTheme,
  materialDefaultTheme,
  MaterialThemeProvider,
} from '@/theme';
import TestComponent from '@/components/test.component';
import Button from '@/components/atoms/Button';

const App = () => (
  <Provider value={rootStore}>
    <ThemeProvider theme={defaultTheme}>
      <MaterialThemeProvider theme={materialDefaultTheme}>
        <BrowserRouter>
          <CssBaseline />
          <div className="App">
            <header className="App-header">
              <h1>임시</h1>
              <Link to="/">root</Link>
              <Link to="/about">about</Link>
              <Link to="/cart">cart</Link>
              <Button variant="outlined">테스트 버튼</Button>
            </header>
            <Switch>
              <Route path="/about">
                <Route path="/">
                  <div>root page</div>
                </Route>
                <div>about page</div>
              </Route>
              <Route path="/cart">
                <TestComponent />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </MaterialThemeProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
