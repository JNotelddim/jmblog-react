// Modules
import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/styles';

// Local components
import Routes from 'src/component/page/Routes';

// Theme
import theme from 'src/theme';

// Initializations
config(); // dotenv
const queryClient = new QueryClient(); // react-query

// App Providers Hierarchy
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
