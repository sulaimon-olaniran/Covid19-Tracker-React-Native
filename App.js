import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import Application from './application/Application';
import Theme, { createStyle } from 'react-native-theming'
import DataContextProvider from './application/context/DataContext';

// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return (
    <DataContextProvider>
      <Application />
    </DataContextProvider>
  );
}

const styles = createStyle({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
