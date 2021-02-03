import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

localStorage.clear();
localStorage.setItem('@server/link', 'https://minhas-series-backend.herokuapp.com');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
