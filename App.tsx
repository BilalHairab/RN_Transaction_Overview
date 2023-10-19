/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/state/store';
import SplashScreen from './src/screens/SplashScreen';
import MainNavigator from './src/navigation/MainNavigatior';

let isDarkMode = true;
function App(): JSX.Element {
  isDarkMode = useColorScheme() === 'dark';
  const [renderedStack, setRenderedStack] = useState(<SplashScreen />);
  useEffect(() => {
    setTimeout(() => {
      setRenderedStack(<MainNavigator />);
    }, 2000);
  }, []);
  return <Provider store={store}>{renderedStack}</Provider>;
}

export default App;
export const appStyles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
