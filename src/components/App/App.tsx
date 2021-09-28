import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import Form from '../Form';
import TransactionsTable from '../TransactionsTable';

import './app.css';

const App: React.FC = () => {
  const { txSuccess, txErrorMessage } = useContext(DataContext);

  return (
    <div className="app">
      <div className="tx_container">
        <h1 className="tx_title">I'm into history. That wallet interests me...</h1>
        <Form />
        {
          txSuccess
            ? <TransactionsTable />
            : <div className="tx_error-message">{txErrorMessage}</div>
        }
      </div>
    </div>
  );
}

export default App;
