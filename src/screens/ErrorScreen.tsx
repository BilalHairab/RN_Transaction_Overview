import {View, Text} from 'react-native';
import React from 'react';

function ErrorScreen({route}) {
  const transaction = route.params?.transaction;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          color: 'red'
        }}>{`Error of Transaction ${transaction.objectId}`}</Text>
    </View>
  );
}
export default ErrorScreen;
