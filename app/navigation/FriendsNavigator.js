import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FriendsScreen from '../Screens/FriendsScreen';
import ChatScreen from '../Screens/ChatScreen';
import AddChatsScreen from '../Screens/AddChatsScreen';

const Stack = createStackNavigator();

const FriendsNavigator = () => (
    <Stack.Navigator initialRouteName="Friends">
        <Stack.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{animationEnabled: false}} />
        <Stack.Screen name="AddChats" component={AddChatsScreen} />
    </Stack.Navigator>
);
export default FriendsNavigator;