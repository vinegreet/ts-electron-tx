export interface IApiTxData {
  status: string
  message: string
  result: IDataTransaction[]
}

export interface IDataTransaction {
  blockNumber: string
  timeStamp: string
  hash: string
  nonce: string
  blockHash: string
  transactionIndex: string
  from: string
  to: string
  value: string
  gas: string
  gasPrice: string
  isError: string
  txreceipt_status: string
  input: string
  contractAddress: string
  cumulativeGasUsed: string
  gasUsed: string
  confirmations: string
}

export interface IDataState {
  address: string
  transactions: IDataTransaction[]
}

export interface IDataStateFunctions extends IDataState {
  getTransactions: Function
}

export interface IDefaultTxRequestParams {
  module: string
  action: string
  startBlock: number
  endBlock: number
  sort: string
}

export interface IGetUrlParams extends IDefaultTxRequestParams {
  address: string
  apiKey: string
}
