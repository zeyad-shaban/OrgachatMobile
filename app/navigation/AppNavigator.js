import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import colors from '../config/colors';
import FriendsNavigator from './FriendsNavigator';
import GroupsNavigator from './GroupsNavigator';
import AccountNavigator from "./AccountNavigator";
import logger from "../utility/logger";
import expoPushTokensApi from "../api/expoPushTokens";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    registerForPushNotifications = async () => {
        const { granted } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!granted) return;
        try {
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            expoPushTokensApi.register(token);
        } catch (error) {
            logger.log("Error getting Expo Push Token: " + error)
        }
    };
    useEffect(() => {
        registerForPushNotifications();
    }, []);
    return (
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
                name="AccountNavigator"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-circle" size={size} color={color} />,
                    title: "Account",
                }}
            />
        </Tab.Navigator>
    );
};
export default AppNavigator;