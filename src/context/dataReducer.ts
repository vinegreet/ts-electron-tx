import { IDataState } from '../models/IData';

export interface IAction {
  type: string
  payload: any
}

export const actionTypes = {
  TRANSACTIONS_SUCCESS: 'TRANSACTIONS_SUCCESS',
  TRANSACTIONS_FAILED: 'TRANSACTIONS_FAILED',
};

const reducer = (state: IDataState, action: IAction) => {
  switch(action.type) {
    case actionTypes.TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
      }

    case actionTypes.TRANSACTIONS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      }

    default:
      return state;
  }
}

export default reducer;
