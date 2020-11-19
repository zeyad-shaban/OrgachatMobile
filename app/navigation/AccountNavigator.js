import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../Screens/AccountScreen';
import EditAccountScreen from "../Screens/account/EditAccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator initialRouteName='Account'>
        <Stack.Screen name='Account' component={AccountScreen} options={{headerShown: false}} />
        <Stack.Screen name='EditAccount' component={EditAccountScreen} options={{title: "Edit account"}} />
    </Stack.Navigator>
);


export default AccountNavigator;