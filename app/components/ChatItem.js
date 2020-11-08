import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import ChatTitle from './text/ChatTitle'
import SmallText from './text/SmallText';

export default function ChatItem({ chat, onPress }) {
    const friend = chat.friend
    const [lastMessage, setLastMessage] = useState(() => { return chat.messages[chat.messages.length - 1] });
    // !REMOVE THIS
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <Image source={{ uri: friend.avatarUri }} style={styles.avatar} />
            <View>
                <ChatTitle style={styles.usernameText}>{friend.username}</ChatTitle>
                <SmallText content={lastMessage.content} numberOfLines={1} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        alignItems: "center"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 2,
        marginRight: 10,
    },
});