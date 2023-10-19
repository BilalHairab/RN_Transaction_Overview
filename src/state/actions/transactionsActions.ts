import {RootState} from '../store';
import {TransactionRecord} from '../../types';

export const currentOrderedTransactionsSelector = (state: RootState) =>
  state.transactionsReducer.ordered_transactions as TransactionRecord[];

export const setLoadedTransactions = (transactions: TransactionRecord[]) => {
  return {
    type: 'setUnOrderedTransactions',
    payload: transactions,
  };
};

export const setOrderedTransactions = (transactions: TransactionRecord[]) => {
  return {
    type: 'setOrderedTransactions',
    payload: transactions,
  };
};
