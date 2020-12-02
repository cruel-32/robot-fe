// .storybook/preview.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import { rootReducer, rootSaga } from '@/redux';
import CssBaseline from '@/components/atoms/CssBaseline';
import { defaultTheme } from '@/theme';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const withThemeProvider = (Story, context) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <CssBaseline />
              <Story {...context} />
            </BrowserRouter>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </Provider>
    </React.StrictMode>
  );
};
export const decorators = [withThemeProvider];
