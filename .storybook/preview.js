// .storybook/preview.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

// import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

import { rootStore, Provider } from '@/stores';
import CssBaseline from '@/components/atoms/CssBaseline';
import {
  defaultTheme,
  materialDefaultTheme,
  MaterialThemeProvider,
} from '@/theme';
const withThemeProvider = (Story, context) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Provider value={rootStore}>
        <ThemeProvider theme={defaultTheme}>
          <MaterialThemeProvider theme={materialDefaultTheme}>
            <CssBaseline />
            <Story {...context} />
          </MaterialThemeProvider>
        </ThemeProvider>
      </Provider>
    </MuiPickersUtilsProvider>
  );
};
export const decorators = [withThemeProvider];
