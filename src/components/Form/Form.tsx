import React, { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';
import { requestStatus } from '../../context/DataState';
import { defaultTxParams, getTxRequestUrl } from '../../models/getTxRequestUrl';
import { IApiTxData } from '../../models/IData';

const Form = () => {
  const [ address, setAddress ] = useState('');
  const [ apiKey, setApiKey ] = useState('');
  const { getTransactions } = useContext(DataContext);

  const handleButtonClick = (): void => {
    (async () => {
      if (address !== '' && apiKey !== '') {
        try {
          const response = await fetch(getTxRequestUrl({ ...defaultTxParams, address, apiKey }));
          const data: IApiTxData = await response.json();
          getTransactions(data.status, data);
        } catch (err) {
          getTransactions(requestStatus.failure);
          console.error(err);
        }
      }
    })();
  }

  return (
    <div className="tx_form">
      <input
        className="tx_address"
        type="text"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        className="tx_api-key"
        type="text"
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button
        className="tx_get-transactions"
        onClick={handleButtonClick}
      >
        Get transactions
      </button>
    </div>
  )
};

export default Form;
