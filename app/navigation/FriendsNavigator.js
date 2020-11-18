import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FriendsScreen from '../Screens/FriendsScreen';
import ChatScreen from '../Screens/ChatScreen';
import AddChatsScreen from '../Screens/AddChatsScreen';
import UsersScreen from '../Screens/UsersScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const FriendsNavigator = ({ navigation, route }) => {
    // const routeName = getFocusedRouteNameFromRoute(route) ?? 'Auth';
    // // todo fix "Auth" routeName when refresh
    // useEffect(() => {
    //     navigation.setOptions({
    //         tabBarVisible: ['Friends', 'Groups', 'Account'].includes(routeName),
    //     });
    // }, [navigation, routeName]);

    return (
        <Stack.Navigator initialRouteName="Friends" screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="AddChats" component={AddChatsScreen} options={{ title: "Add friends" }} />
            <Stack.Screen name="Users" component={UsersScreen} />
        </Stack.Navigator>
    );
};
export default FriendsNavigator;