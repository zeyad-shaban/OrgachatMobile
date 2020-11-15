import React from 'react';
import { Button, StyleSheet } from 'react-native';

import ListItem from '../components/lists/ListItem';
import AppText from '../components/text/Text';
import colors from '../config/colors';
import useContacts from '../hooks/useContacts';

export default function AddChatsScreen({ navigation }) {
    const { contacts, granted, askContactsPerm } = useContacts();
    return (
        <>
            <ListItem iconName="share-variant" onPress={() => alert("Beta, under developing, todo")} title="Invite a friend" backgroundColor={colors.primary} />
            <ListItem iconName="account-search" backgroundColor={colors.secondary} onPress={() => navigation.navigate('Users')} title="Search all users" />
            <AppText />
            {contacts.length > 0 ?
                <AppText>You have some contacts, we will show them!</AppText>
                :
                <>
                    {granted ?
                        <>
                            <AppText>None of your contacts is using Orgachat.</AppText>
                        </>
                        :
                        <>
                            <AppText>To see who of your contacts is using Orgachat you need to Allow Contacts Permission.</AppText>
                            <Button title="Allow Contacts Permission" onPress={askContactsPerm} />
                        </>
                    }
                </>
            }
        </>
    );
}

const styles = StyleSheet.create({

})