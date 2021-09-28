import React, { useReducer } from 'react';
import DataContext from './DataContext';
import dataReducer, { actionTypes } from './dataReducer';
import { IApiTxData, IDataStateFunctions } from '../models/IData';
import { initialState } from '../models';

export const requestStatus = {
  success: '1',
  failure: '0',
};

// When you submit invalid address or API key, Etherscan returns this strange 'NOTOK' in the
// 'message' property, whereas the meaningful message sits in the 'result' property...
export const errorMessageWhenToShowResultInstead = 'NOTOK';

const DataState: React.FC = ({ children }) => {
  const [ state, dispatch ] = useReducer(dataReducer, initialState);

  const getTransactions = (status: string, data: IApiTxData): void => {
    const { message, result } = data;

    if (status === requestStatus.success) {
      dispatch({
        type: actionTypes.TRANSACTIONS_SUCCESS,
        payload: result,
      });
    } else {
      dispatch({
        type: actionTypes.TRANSACTIONS_FAILED,
        payload: message === errorMessageWhenToShowResultInstead
          ? result
          : message ?? 'Something went wrong, please check your connection, or try again later.',
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
