import {View, Text} from 'react-native';
import React from 'react';

function TransactionsDetail2Screen({route}) {
  const transaction = route.params?.transaction;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          color: 'green'
        }}>{`Details 2 of Transaction ${transaction.objectId}`}</Text>
    </View>
  );
}
export default TransactionsDetail2Screen;
