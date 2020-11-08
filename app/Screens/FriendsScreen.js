import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatItem from '../components/ChatItem';
import Separator from '../components/Separator';

import AppText from '../components/text/Text'




let users = [
    {
        id: 1,
        username: "Zeyad Shaban",
        password: "zPass",
        phoneNumber: "+201068368804",
        avatarUri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        chats: [
            // * Created when someone send at least one message

        ],
        contacts: [
            // * Everyone in users contacts who uses Orgachat
        ],
    },
    {
        id: 2,
        username: "Merna Magdy",
        password: "mmPass",
        phoneNumber: "+20111111111",
        avatarUri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        chats: [

        ],
        contacts: [
        ],
    },
    {
        id: 3,
        username: "Adam Sarhan",
        password: "aPass",
        phoneNumber: "+2022222222",
        avatarUri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        chats: [

        ],
        contacts: [
        ],
    },
]


let messages = [
    {
        id: 1,
        user: users[0],
        content: "Hi merna, I'm zeyad! How was your day? :)",
        // todo add file attachment
    },
]


let initialChats = [
    {
        id: 1,
        // ! REmove user from here, add [chats] to User object
        user: users[0],
        type: "friend", // Or group
        friend: users[1],
        messages: [
            messages[0],
        ]
    },
    {
        id: 2,
        user: users[1],
        friend: users[0],
        type: "friend", // Or group
        messages: [
        ]
    },
].filter(chat => chat.user == users[0])


export default function FriendsScreen({ navigation }) {
    const [chats, setChats] = useState(() => { return initialChats })
    return (
        <FlatList
            data={chats}
            keyExtractor={chat => chat.id}
            ItemSeparatorComponent={() => (<Separator />)}
            renderItem={({ item }) => (
                <ChatItem chat={item} onPress={() => navigation.navigate("Chat", item)} />
            )}
        />
    );
};

const styles = StyleSheet.create({

});