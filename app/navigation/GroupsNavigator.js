import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GroupsScreen from '../Screens/groups/GroupsScreen';
import AddGroupScreen from '../Screens/groups/AddGroupScreen';
import GroupSettingsScreen from '../Screens/groups/GroupSettingsScreen';
import AddMembersScreen from "../Screens/groups/AddMembersScreen";
import ChatScreen from "../Screens/ChatScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();
const GroupsNavigator = ({route, navigation}) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Auth';
    useEffect(() => {
        navigation.setOptions({
            tabBarVisible: ['Friends', 'Groups', 'Account', 'Auth'].includes(routeName),
        });
    }, [navigation, routeName]);
    return (
        <Stack.Navigator initialRouteName="Groups" screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="AddGroup" component={AddGroupScreen} options={{ title: "Add a Group" }} />
            <Stack.Screen name="GroupSettings" component={GroupSettingsScreen} options={{ title: "Group Settings", headerShown: false }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="AddMembers" component={AddMembersScreen} options={{ title: "Group Settings", headerShown: false }} />
        </Stack.Navigator>
    );
};

export default GroupsNavigator;