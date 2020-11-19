import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import AuthNavigator from './app/navigation/AuthNavigator'
import AppNavigator from './app/navigation/AppNavigator';
import myTheme from './app/navigation/NavigationTheme';
import authStorage from './app/auth/storage';
import AuthContext from './app/auth/context';
import logger from './app/utility/logger';

logger.start();


export default function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const restoreToken = async () => {
    const user = await authStorage.getUser();
    setUser(user);
  };
  if (isLoading) return <AppLoading startAsync={() => restoreToken()} onFinish={() => setIsLoading(false)} />;
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={myTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, }, });