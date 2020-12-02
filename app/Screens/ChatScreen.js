import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SendMessage from '../components/chat/SendMessage';
import Message from '../components/chat/Message';
import useAuth from '../hooks/useAuth';
import colors from '../config/colors';
import ChatHeader from '../components/chat/ChatHeader';
import GroupOptionsScreen from './groups/GroupOptionsScreen';
import ActivityIndicator from '../components/ActivityIndicator';
import useChat from "../hooks/useChat";
import settings from "../config/settings";


export default function ChatScreen({ route }) {
    const { user } = useAuth();
    const [optionsVisible, setOptionsVisible] = useState(() => false);

    const { socket, chat, loading, messages, setMessages, handleSendMessage, handleUpload } = useChat(`${settings.wsUrl}chat/${route.params.chat.id}/?userId=${user.id}`, route.params.chat.id, route.params.channelId || null);


    if (socket) {
        socket.onmessage = e => {
            const { message } = JSON.parse(e.data);
            if (!message) return;
            setMessages([message, ...messages]);
        };
    }


    // -----room options------
    const getSubtitle = () => {
        if (chat.type === 'friend') {
            otherChatter = chat.chatters.filter(c => c.id !== user.id);
            return otherChatter[0].last_seen === '0s ago' ? 'Online' : otherChatter[0].last_seen;
        }
        if (chat.chatters) {
            let output = [];
            chat.chatters.slice(0, 3).forEach(c => output.push(c.username));
            return output.join(', ');
        }
    };
    // -----END room options------

    return (
        <>
            {chat.type === 'group' && <GroupOptionsScreen visible={optionsVisible} setVisible={setOptionsVisible} chat={chat} />}
            <View style={styles.container}>
                <ChatHeader title={chat.title} subTitle={getSubtitle()} imageUri={"https://www.orgachat.com" + chat.imageUri} onPress={chat.type == 'group' ? () => setOptionsVisible(true) : null} />
                <ActivityIndicator animating={loading} full={true} />
                <View style={styles.messagesContainer}>
                    <FlatList
                        data={messages}
                        keyExtractor={item => JSON.stringify(item.id)}
                        inverted
                        renderItem={({ item }) => (
                            <Message type={chat.type} message={item} />
                        )}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SendMessage handleSubmit={handleSendMessage}
                        handleUpload={handleUpload}
                        placeholder={chat.channel ? `#${chat.channel.title} channel` : "Write your message"}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.semiMedium,
        flex: 1,
    },
    messagesContainer: {
        marginBottom: 110,
    },
    inputContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
});