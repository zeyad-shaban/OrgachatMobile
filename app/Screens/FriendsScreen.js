import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import useApi from '../hooks/useApi';
import BottomButton from '../components/BottomButton';
import Separator from '../components/Separator';
import chatApi from '../api/chat';
import ListItem from '../components/lists/ListItem';
import ActivityIndicator from '../components/ActivityIndicator';

export default function FriendsScreen({ navigation }) {
    const { data: chats, loading, error, } = useApi(chatApi.getFriendChats);

    return (
        <>
        <ActivityIndicator animating={loading}   />
            <FlatList
                data={chats}
                keyExtractor={chat => JSON.stringify(chat.id)}
                ItemSeparatorComponent={() => (<Separator />)}
                renderItem={({ item }) => (
                    <ListItem
                        title="Title under developing Beta"
                        subTitle="Getting last message under developing Beta"
                        // imageUri={item.friend.avatarUri}
                        onPress={() => navigation.navigate("Chat", { chat: item, type: "friend" })}
                    />
                )}
            />
            <BottomButton name="account-plus" onPress={() => navigation.navigate("AddChats")}>
            </BottomButton>
        </>
    );
};

const styles = StyleSheet.create({

});