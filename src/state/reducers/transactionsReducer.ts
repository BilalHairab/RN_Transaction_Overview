let initState = {
  unordered_transactions: undefined,
  ordered_transactions: undefined,
};
type Action = {
  type: string;
  payload: any;
};
function transactionReducer(state = initState, action: Action) {
  switch (action.type) {
    case 'setUnOrderedTransactions':
      return {
        ...state,
        unordered_transactions: action.payload,
        ordered_transactions: undefined,
      };

    case 'setOrderedTransactions':
      return {
        ...state,
        unordered_transactions: undefined,
        ordered_transactions: action.payload,
      };

    default:
      return state;
  }
}

export default transactionReducer;
