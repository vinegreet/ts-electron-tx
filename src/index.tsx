import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DataState from './context/DataState';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DataState>
      <App />
    </DataState>
  </React.StrictMode>,
  document.getElementById('root')
);
