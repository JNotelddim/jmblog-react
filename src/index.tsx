// Modules
import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/styles';
import { initializeServiceWorker } from './serviceWorker/initServiceWorker';

// Local components
import AuthPage from 'src/component/page/AuthPage';

// Theme
import theme from 'src/theme';

// Initializations
initializeServiceWorker(); // Service worker
config(); // dotenv
const queryClient = new QueryClient(); // react-query

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
