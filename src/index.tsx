// Modules
import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/styles';

// Local components
import AuthPage from 'src/component/page/AuthPage';

import theme from 'src/theme';

// Initializations
config();
const queryClient = new QueryClient();

// App Providers Hierarchy
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthPage pageType="LOGIN" />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
