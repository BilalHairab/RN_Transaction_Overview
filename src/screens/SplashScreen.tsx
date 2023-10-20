import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import transactionsData from '../data/transactions.json';
import {type TransactionRecord} from '../types';
import {useDispatch} from 'react-redux';
import {
  setLoadedTransactions,
  setOrderedTransactions,
} from '../state/actions/transactionsActions';

function SplashScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    const transactions = transactionsData as TransactionRecord[];
    console.log(transactions.length);

    dispatch(setLoadedTransactions(transactions));
    let transactionsSectionsMap = new Map<string, TransactionRecord[]>();
    transactions.forEach(tx => {
      const date = tx.timestamp.split('T')[0];
      transactionsSectionsMap.set(date, [tx]);
    });
    dispatch(setOrderedTransactions(transactionsSectionsMap));
  }, []);
  return (
    <View>
      <Text>Splaaaash</Text>
    </View>
  );
}
export default SplashScreen;
