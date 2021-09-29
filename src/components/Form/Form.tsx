import React, { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';
import { requestStatus } from '../../context/DataState';
import { defaultTxParams, getTxRequestUrl } from '../../models/getTxRequestUrl';
import { IApiTxData } from '../../models/IData';

import './form.css';

const Form: React.FC = () => {
  const [ address, setAddress ] = useState('0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');
  const [ apiKey, setApiKey ] = useState('');
  const { getTransactions } = useContext(DataContext);
  const isButtonDisabled = address === '' || apiKey === '';

  const handleButtonClick = (): void => {
    (async () => {
      try {
        const response = await fetch(getTxRequestUrl({ ...defaultTxParams, address, apiKey }));
        const data: IApiTxData = await response.json();
        getTransactions(data.status, data);
      } catch (err) {
        getTransactions(requestStatus.failure);
        console.error(err);
      }
    })();
  }

  return (
    <div className="tx_form">
      <label className="input-label">Ethereum wallet address (mandatory)</label>
      <input
        className="input tx_address"
        type="text"
        placeholder="Ethereum wallet address"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <label className="input-label">Your Etherscan API key (mandatory)</label>
      <input
        className="input tx_api-key"
        type="text"
        placeholder="Your Etherscan API key"
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button
        className="button tx_get-transactions"
        onClick={handleButtonClick}
        disabled={isButtonDisabled}
      >
        Get transactions
      </button>
    </div>
  )
};

export default Form;
