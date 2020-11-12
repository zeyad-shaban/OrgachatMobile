import React, { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts'

import ListingItem from '../components/lists/ListingItem';
import AppText from '../components/text/Text';
import colors from '../config/colors';

const initalContacts = []
export default function AddChatsScreen(props) {
    // todo not getting contacts
    const [contacts, setContacts] = useState(() => { return initalContacts });
    const [granted, setGranted] = useState(false);
    const askContactsPerm = async () => {
        const { granted } = await Contacts.requestPermissionsAsync();
        setGranted(granted);
    }
    useEffect(() => {
        askContactsPerm();
    }, [])
    return (
        <>
            <ListingItem iconName="share-variant" onPress={() => alert("Beta, under developing, todo")}>Invite a friend</ListingItem>
            <ListingItem iconName="account-search" backgroundColor={colors.secondary} onPress={() => alert("Beta, under developing, todo")}>Search all users</ListingItem>
            <AppText />
            {contacts.length > 0 ?
                <AppText>You have some contacts</AppText>
                :
                <>
                    {granted ?
                        <>
                            <AppText>None of your contacts uses Orgachat.</AppText>
                            <AppText>Click on Invite a friend.</AppText>
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