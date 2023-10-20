import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionsDetail1Screen from '../screens/TransactionDetail1Screen';
import TransactionsDetail2Screen from '../screens/TransactionDetail2Screen';
import ErrorScreen from '../screens/ErrorScreen';

const Stack = createNativeStackNavigator<any>();

export function MainNavigator(props: any) {
  const navTheme = DefaultTheme;
  // navTheme.colors.background = '#2D3134';
  // navTheme.colors.text = '#fff';

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName={'TransactionsList'}
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="TransactionsList"
          component={TransactionsListScreen}
          options={{title: 'Account Transactions'}}
        />
        <Stack.Screen
          name="TransactionDetail1"
          component={TransactionsDetail1Screen}
          options={{title: 'Details 1'}}
        />
        <Stack.Screen
          name="TransactionDetail2"
          component={TransactionsDetail2Screen}
          options={{title: 'Details 2'}}
        />
        <Stack.Screen
          name="ErrorScreen"
          component={ErrorScreen}
          options={{title: 'Error'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
