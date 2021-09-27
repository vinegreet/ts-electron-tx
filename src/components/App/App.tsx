import React from 'react';
import Form from '../Form';
import TxTable from '../TxTable/TxTable';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <div className="tx_container">
        <Form />
        <TxTable />
        {/* TODO: show error message instead of table in case of failed request */}
      </div>
    </div>
  );
}

export default App;
