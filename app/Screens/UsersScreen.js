import React from 'react';
import { FlatList } from 'react-native';

import usersApi from '../api/users';
import ListItem from '../components/lists/ListItem';
import Separator from '../components/Separator'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi';
import chatApi from '../api/chat';

export default function UsersScreen({ navigation }) {
    const { data: users, loading, setLoading } = useApi(usersApi.getUsers);

    const handlePress = async item => {
        setLoading(true);
        const response = await chatApi.getChat({ friendId: item.id, type: "friend" });
        setLoading(false);
        if (!response.ok) return alert("Error occured")
        navigation.navigate("Chat", { chat: response.data.chat, messages: response.data.messages })
    };

    return (
        <>
            {<ActivityIndicator animating={loading} />}
            <FlatList
                data={users}
                ItemSeparatorComponent={Separator}
                keyExtractor={item => JSON.stringify(item.id)}
                renderItem={({ item }) => <ListItem title={item.username} subTitle={item.about} imageUri={"https://www.orgachat.com" + item.avatar} onPress={() => handlePress(item)} />}
            />
        </>

    );
}