import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import FriendsNavigator from './FriendsNavigator';
import AccountScreen from '../Screens/AccountScreen';
import GroupsNavigator from './GroupsNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator
        initialRouteName="Friends"
        tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: colors.medium,
        }}
    >
        <Tab.Screen
            name="Groups"
            component={GroupsNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-group" size={size} color={color} />
            }}
        />
        <Tab.Screen
            name="Friends"
            component={FriendsNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-multiple" size={size} color={color} />
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-circle" size={size} color={color} />
            }}
        />
    </Tab.Navigator>
);
export default AppNavigator;