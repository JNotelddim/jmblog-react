// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Local components
import ListPage from './component/page/ListPage';

// Initializations
const queryClient = new QueryClient();

// App Providers Hierarchy
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ListPage />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
