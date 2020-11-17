import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GroupsScreen from '../Screens/GroupsScreen';
import AddGroupScreen from '../Screens/AddGroupScreen';



const Stack = createStackNavigator();
const GroupsNavigator = () => (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="AddGroup" component={AddGroupScreen} />
    </Stack.Navigator>
)

export default GroupsNavigator