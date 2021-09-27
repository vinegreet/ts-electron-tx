import React, { useReducer } from 'react';
import DataContext from './DataContext';
import dataReducer, { actionTypes } from './dataReducer';
import { IDataStateFunctions, IDataTransaction } from '../models/IData';
import { initialState } from '../models';

export const requestStatus = {
  success: '1',
  failure: '0',
};

const DataState: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(dataReducer, initialState);

  const getTransactions = (status: string, transactions?: IDataTransaction[], message?: string): void => {
    if (status === requestStatus.success) {
      dispatch({
        type: actionTypes.TRANSACTIONS_SUCCESS,
        payload: transactions,
      });
    } else {
      dispatch({
        type: actionTypes.TRANSACTIONS_FAILED,
        payload: message ?? 'Something went wrong, please check your connection, or try again later.',
      });
    }
  }

  const valueState: IDataStateFunctions = {
    ...state,
    getTransactions,
  };

  return (
    <DataContext.Provider value={valueState}>
      {children}
    </DataContext.Provider>
  );
}

export default DataState;
