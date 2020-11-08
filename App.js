import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import AppNavigator from './app/navigation/AppNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, }, });