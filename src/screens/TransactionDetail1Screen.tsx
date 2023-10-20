import {Text, View} from 'react-native';
import React from 'react';

function TransactionsDetail1Screen({route}) {
  const transaction = route.params?.transaction;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>{`Details 1 of Transaction ${transaction.objectId}`}</Text>
    </View>
  );
}
export default TransactionsDetail1Screen;
