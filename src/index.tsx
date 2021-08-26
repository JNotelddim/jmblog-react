// Modules
import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/styles';
import { Provider as ReduxProvider } from 'react-redux';

// Local components
import { initializeServiceWorker } from './serviceWorker/initServiceWorker';
import Routes from 'src/component/page/Routes';
import { store } from 'src/redux';

// Theme
import theme from 'src/theme';

// Initializations
initializeServiceWorker(); // Service worker
config(); // dotenv
const queryClient = new QueryClient(); // react-query

// App Providers Hierarchy
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
