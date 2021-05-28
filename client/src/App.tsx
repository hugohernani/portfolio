import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
