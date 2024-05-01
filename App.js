import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Main from './src/screens/Main';
import styles from './src/styles/main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </SafeAreaView>
  );
}
