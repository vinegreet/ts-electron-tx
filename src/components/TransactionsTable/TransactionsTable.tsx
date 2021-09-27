import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import TransactionRow from './TransactionRow';

import './transactionsTable.css';

const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(DataContext);

  const transactionRows = transactions.map((tx) => <TransactionRow transaction={tx} key={tx.hash} />);

  return (
    <div className="tx_table">
      <div className="tx_table-row table-header">
        <div className="table-header_cell table-column_timestamp">Timestamp</div>
        <div className="table-header_cell table-column_from">From</div>
        <div className="table-header_cell table-column_to">To</div>
        <div className="table-header_cell table-column_amount">Amount</div>
        <div className="table-header_cell table-column_confirmations">Confirmations</div>
        <div className="table-header_cell table-column_hash">Hash</div>
      </div>
      {transactionRows}
    </div>
  )
};

export default TransactionsTable;
