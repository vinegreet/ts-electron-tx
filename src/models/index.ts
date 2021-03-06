import { IDataStateFunctions } from './IData';

export const host = 'https://api.etherscan.io';
export const apiEndpoint = '/api';

export const initialState: IDataStateFunctions = {
  txSuccess: false,
  txErrorMessage: '',
  transactions: [],
  getTransactions() {},
};
