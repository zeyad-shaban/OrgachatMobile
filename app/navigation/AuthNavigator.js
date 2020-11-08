import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../Screens/auth/WelcomeScreen'
import ValidatePhoneNumberScreen from '../Screens/auth/ValidatePhoneNumberScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="ValidatePhoneNumber" component={ValidatePhoneNumberScreen} options={{title: "Validate phone number"}} />
    </Stack.Navigator>
)

export default AuthNavigator;