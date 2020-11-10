// .storybook/preview.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
// import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

import { rootStore, Provider } from '@/stores';
import { defaultTheme } from '@/theme';
import CssBaseline from '@/components/atoms/CssBaseline';

const withThemeProvider=(Story,context)=>{
  return (
    <Provider value={rootStore}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Provider>
  )
}
export const decorators = [withThemeProvider];