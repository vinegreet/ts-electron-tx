import React from 'react';
import dateTime from '../../helpers/dateTime';
import formatAmount from '../../helpers/formatAmount';
import formatConfirmations from '../../helpers/formatConfirmations';
import { IDataTransaction } from '../../models/IData';

interface Props {
  transaction: IDataTransaction
}

const TransactionRow: React.FC<Props> = ({
  transaction: {
    timeStamp,
    from,
    to,
    value,
    confirmations,
    hash,
  },
}) => {
  return (
    <div className="tx_table-row" key={hash}>
      <div className="tx_table-cell table-column_timestamp" title={dateTime(timeStamp)}>
        {dateTime(timeStamp)}
      </div>
      <div className="tx_table-cell table-column_from" title={from}>{from}</div>
      <div className="tx_table-cell table-column_to" title={to}>{to}</div>
      <div className="tx_table-cell table-column_amount" title={formatAmount(value)}>
        {formatAmount(value)}
      </div>
      <div className="tx_table-cell table-column_confirmations" title={formatConfirmations(confirmations)}>
        {formatConfirmations(confirmations)}
      </div>
      <div className="tx_table-cell table-column_hash" title={hash}>{hash}</div>
    </div>
  );
}

export default TransactionRow;
