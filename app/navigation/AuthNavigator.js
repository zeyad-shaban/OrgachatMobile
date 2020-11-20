import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../Screens/auth/RegisterScreen'
import LoginScreen from '../Screens/auth/LoginScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{title: "Validate your email"}} />
    </Stack.Navigator>
)

export default AuthNavigator;