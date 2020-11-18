import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GroupsScreen from '../Screens/GroupsScreen';
import AddGroupScreen from '../Screens/AddGroupScreen';
import Chat from '../Screens/ChatScreen';

const Stack = createStackNavigator();
const GroupsNavigator = () => (
    <Stack.Navigator initialRouteName="Groups" screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="AddGroup" component={AddGroupScreen} options={{
            title: "Add a Group"
        }} />
    </Stack.Navigator>
)

export default GroupsNavigator