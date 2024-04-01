import React from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom';
import ResetStyle from './style/ResetStyle.ts';
import GlobalStyle from './style/GlobalStyle.ts';

ReactDOM.render(
  <React.StrictMode>    
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
