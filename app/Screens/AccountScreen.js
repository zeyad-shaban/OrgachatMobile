import React from 'react';
import { Alert, Text } from 'react-native';

import ListCard from '../components/lists/ListCard';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import useAuth from '../hooks/useAuth';
import Separator from '../components/Separator';
import SmallText from '../components/text/SmallText';

export default function AccountScreen({ navigation }) {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        Alert.alert("Logout", "Are you sure you want to logout?", [
            {
                text: "No",
            },
            {
                text: "Yes",
                onPress: logout,
            },
        ]);
    };
    return (
        <>
            <Text />
            <ListCard>
                <ListItem title={user.username} subTitle={user.about} imageUri={`https://www.orgachat.com${user.avatarUri}`} onPress={() => navigation.navigate('EditAccount')} />
            </ListCard>
            <ListCard>
                <ListItem title="Log Out" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />} onPress={handleLogout} />
            </ListCard>
        </>
    );
}