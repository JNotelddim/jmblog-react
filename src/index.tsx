// Modules
import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/styles';

// Local components
import ListPage from './component/page/ListPage';

import theme from 'src/theme';

// Initializations
config();
const queryClient = new QueryClient();

// App Providers Hierarchy
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ListPage />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
