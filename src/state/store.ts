import {createStore, combineReducers} from 'redux';
import transactionsReducer from './reducers/transactionsReducer';

const rootReducer = combineReducers({
  transactionsReducer,
});

let store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
