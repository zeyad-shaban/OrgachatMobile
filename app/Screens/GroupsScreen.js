import React from 'react';
import { FlatList } from 'react-native';

import useApi from '../hooks/useApi';
import BottomButton from '../components/BottomButton';
import Separator from '../components/Separator';
import chatApi from '../api/chat';
import ListItem from '../components/lists/ListItem';
import ActivityIndicator from '../components/ActivityIndicator';

export default function FriendsScreen({ navigation }) {
    const { data: chats, loading, error, } = useApi(chatApi.getGroupChats);
    return (
        <>
            <ActivityIndicator animating={loading} />
            <FlatList
                data={chats}
                keyExtractor={item => JSON.stringify(item.id)}
                ItemSeparatorComponent={() => (<Separator />)}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.lastMessagge}
                        imageUri={"https://www.orgachat.com" + item.imageUri}
                        onPress={() => navigation.navigate("Chat", { chat: item })}
                    />
                )}
            />
            <BottomButton name="plus" onPress={() => navigation.navigate("AddGroup")}>
            </BottomButton>
        </>
    );
}