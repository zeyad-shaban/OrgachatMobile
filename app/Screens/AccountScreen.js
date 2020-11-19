import React from 'react';
import { Alert, Text, View } from 'react-native';

import ListCard from '../components/lists/ListCard';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import useAuth from '../hooks/useAuth';
import colors from '../config/colors';
import Separator from '../components/Separator';

export default function AccountScreen({ navigation }) {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        Alert.alert("Logout", "Are you sure you want to logout?", [
            {
                text: "Yes",
                onPress: logout,
            },
            {
                text: "No, keep me signed in",
            },
        ])
    }
    return (
        <>
            <Text />
            <ListCard>
                <ListItem title={user.username} subTitle={user.about} imageUri={`https://www.orgachat.com${user.avatarUri}`} onPress={() => navigation.navigate('EditAccount')} />
            </ListCard>
            <View>
                {/* <ListCard>
                    <ListItem
                        title="My Listings"
                        ImageComponent={<Icon name="format-list-bulleted"
                            backgroundColor={colors.danger}
                        />}
                        onPress={() => navigation.navigate("MyListings")}
                    />
                    <Separator />
                    <ListItem
                        title="My Messages"
                        ImageComponent={<Icon name="email" backgroundColor={colors.secondary} />}
                        onPress={() => navigation.navigate("Messages")}
                    />
                </ListCard> */}
            </View>
            <ListCard>
                <ListItem title="Log Out" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />} onPress={handleLogout} />
            </ListCard>
        </>
    );
}