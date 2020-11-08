import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import AuthNavigator from './app/navigation/AuthNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, }, });