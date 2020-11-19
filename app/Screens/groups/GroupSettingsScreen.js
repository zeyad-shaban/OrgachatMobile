import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../../components/lists/ListItem';
import colors from '../../config/colors';
import Separator from '../../components/Separator';
import ChatHeader from '../../components/chat/ChatHeader';
import Section from '../../components/Section';


export default function GroupSettingsScreen({ route, navigation }) {
    const chat = route.params.chat

    const handleLeave = () => {
        // todo remove group
        alert("Leaving")
    }

    return (
        <View style={styles.container}>
            <ChatHeader title={chat.title + " Settings"} imageUri={"https://www.orgachat.com" + chat.imageUri} />
            <Section>
                <ListItem iconName="account-plus" backgroundColor={colors.primary} title="Add members" onPress={() => navigation.navigate('AddMembers', {chat: chat})} />
                <Separator />
                <FlatList
                    data={chat.chatters}
                    keyExtractor={item => JSON.stringify(item.id)}
                    ItemSeparatorComponent={Separator}
                    renderItem= {({ item }) => (
                        <>
                        <ListItem title={item.username} subTitle={item.about} imageUri={`https://www.orgachat.com${item.avatar}`} />
                        </>
                    )}
                />
            </Section>
            <Section>
                    <ListItem iconName="account-plus" backgroundColor={colors.warning} title="Leave group" onPress={handleLeave} />
            </Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.semiMedium,
        flex: 1,
    },
})