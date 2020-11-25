import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SendMessage from '../components/chat/SendMessage';
import Text from '../components/text/Text';
import Message from '../components/chat/Message';
import useAuth from '../hooks/useAuth';
import colors from '../config/colors';
import ChatHeader from '../components/chat/ChatHeader';
import useApi from '../hooks/useApi';
import GroupOptionsScreen from './groups/GroupOptionsScreen';
import chatApi from '../api/chat';
import ActivityIndicator from '../components/ActivityIndicator';
import settings from "../config/settings";

export default function ChatScreen({ route }) {
    const chatId = route.params.chat.id;
    const { user } = useAuth();
    const [chat, setChat] = useState({});
    const [loading, setLoading] = useState(false);
    const [optionsVisible, setOptionsVisible] = useState(() => false);
    const [messages, setMessages] = useState([]);
    const chatSocket = new WebSocket(`${settings.wsUrl}chat/${chatId}/?userId=${user.id}`);


    // Load & Join & Leave Room
    useEffect(() => {
        chatSocket.onopen = async () => {
            setLoading(true);
            const { data } = await chatApi.getChat({ chatId: chatId, channelId: route.params.channelId });
            setLoading(false);
            setChat(data);
            setMessages([...data.messages]);
        };

        return () => {
            chatSocket.close();
            return chatSocket.removeEventListener();
        };
    }, []);



    const handleSendMessage = text => chatSocket.send(
        JSON.stringify({
            text,
            channelId: chat.channel ? chat.channel.id : "undefined",
        })
    );

    const handleUpload = (fd, type) => chatSocket.send(
        JSON.stringify({
            fd,
            type,
            channelId: chat.channel ? chat.channel.id : "undefined",
        })
    );

    chatSocket.onmessage = e => {
        const { message } = JSON.parse(e.data);
        setMessages([...messages, message]);
    };

    const getSubtitle = () => {
        if (chat.type === 'friend') {
            otherChatter = chat.chatters.filter(c => c.id !== user.id);
            return otherChatter[0].last_seen === '0s ago' ? 'Online' : otherChatter[0].last_seen;
        }
        if (chat.chatters) {
            let output = [];
            chat.chatters.slice(0, 3).forEach(c => output.push(c.username))
            return output.join(', ');
        }
    };

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
                        renderItem={({ item }) => (
                            <Message sender={item.user} channel={item.channel} type={chat.type}>{<Text>{item.content}</Text>}</Message>
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