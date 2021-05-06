import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={'/'}>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
