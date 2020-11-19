import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GroupsScreen from '../Screens/groups/GroupsScreen';
import AddGroupScreen from '../Screens/groups/AddGroupScreen';
import GroupSettingsScreen from '../Screens/groups/GroupSettingsScreen';
import AddMembersScreen from "../Screens/groups/AddMembersScreen";

const Stack = createStackNavigator();
const GroupsNavigator = () => (
    <Stack.Navigator initialRouteName="Groups" screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="AddGroup" component={AddGroupScreen} options={{ title: "Add a Group" }} />
        <Stack.Screen name="GroupSettings" component={GroupSettingsScreen} options={{ title: "Group Settings", headerShown: false }} />
        <Stack.Screen name="AddMembers" component={AddMembersScreen} options={{ title: "Group Settings", headerShown: false }} />
    </Stack.Navigator>
)

export default GroupsNavigator