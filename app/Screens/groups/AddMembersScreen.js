import React from 'react';
import { Alert, FlatList } from 'react-native';

import ChatHeader from '../../components/chat/ChatHeader';
import ListItem from '../../components/lists/ListItem';
import Separator from '../../components/Separator';
import ActivityIndicator from '../../components/ActivityIndicator';
import useApi from '../../hooks/useApi';
import chatApi from '../../api/chat';
import AppText from "../../components/text/Text";

export default function AddMembersScreen({ route }) {
    const chat = route.params.chat;
    const { data: users, loading, setLoading, error } = useApi(chatApi.addMember, {chatId: chat.id});

    const handlePress = async item => {
        setLoading(true);
        const response = await chatApi.addMember({ userId: item.id, chatId: chat.id });
        setLoading(false);
        if (!response.ok) return alert("Error occured");
        Alert.alert("Added ", "It may take some time to show on your device");
    };
    return (
        <>
        <ChatHeader title={`${chat.title} add member`} imageUri={"https://www.orgachat.com" + chat.imageUri} />
            <ActivityIndicator animating={loading} />
            {users.length > 0 ? <FlatList
                data={users}
                ItemSeparatorComponent={Separator}
                keyExtractor={item => JSON.stringify(item.id)}
                renderItem={({ item }) => <ListItem title={item.username} subTitle={item.about} imageUri={"https://www.orgachat.com" + item.avatar} onPress={() => handlePress(item)} />}
            /> : !loading &&<AppText>No users found</AppText>}
        </>
    );
};