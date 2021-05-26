import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={'/'}>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
