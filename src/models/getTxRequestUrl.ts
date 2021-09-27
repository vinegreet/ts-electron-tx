import { apiEndpoint, host } from '.';
import { IDefaultTxRequestParams, IGetUrlParams } from './IData';

export type GetTxRequestUrl = (params: IGetUrlParams) => string;

export const defaultTxParams: IDefaultTxRequestParams = {
  module: 'account',
  action: 'txlist',
  startBlock: 0,
  endBlock: 99999999,
  sort: 'asc',
};

export const getTxRequestUrl: GetTxRequestUrl = ({
  module,
  action,
  address,
  startBlock,
  endBlock,
  sort,
  apiKey,
}): string => {
  const paramsUrl = `?module=${module}&action=${action}&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=${sort}&apikey=${apiKey}`;
  return `${host}${apiEndpoint}${paramsUrl}`;
};
