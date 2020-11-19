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

export default function ChatScreen({ route }) {
    const { user } = useAuth();
    const { data: chat, loading } = useApi(chatApi.getChat, { chatId: route.params.chat.id, channelId: route.params.channelId });
    const [text, setText] = useState(() => { return "" });
    const [optionsVisible, setOptionsVisible] = useState(() => false);
    const [chatSocket, setChatSocket] = useState(new WebSocket(`ws://10.0.3.2:8000/ws/chat/${chat.id}/?userId=${user.id}`))
    const [messages, setMessages] = useState(() => chat.messages)
    useEffect(() => {
        setChatSocket(new WebSocket(`ws://10.0.3.2:8000/ws/chat/${chat.id}/?userId=${user.id}`))
        setMessages(chat.messages)
    }, [chat])
    chatSocket.onmessage = e => {
        // todo show new messages onmessage
        const data = JSON.parse(e.data);
        setMessages([...messages, data.message])
    };
    const handleSubmit = () => {
        chatSocket.send(JSON.stringify({
            text: text,
            channelId: chat.channel ? chat.channel.id: "undefined",
        }));
        setText("");
    };

    return (
        <>
            {chat.type == 'group' && <GroupOptionsScreen visible={optionsVisible} setVisible={setOptionsVisible} chat={chat} />}
            <View style={styles.container}>
                <ChatHeader title={chat.title} imageUri={"https://www.orgachat.com" + chat.imageUri} onPress={chat.type == 'group' ? () => setOptionsVisible(true) : null} />
                <View style={styles.messagesContainer}>
                    <ActivityIndicator animating={loading} />
                    {/* // todo start from bottom instead of top */}
                    <FlatList
                        data={messages}
                        keyExtractor={item => JSON.stringify(item.id)}
                        renderItem={({ item }) => (
                            <Message sender={item.user} channel={item.channel} type={chat.type}>{item.isText ? <Text>{item.content}</Text> : <></>}</Message>
                        )}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SendMessage text={text} setText={setText} handleSubmit={handleSubmit} placeholder={chat.channel ? `#${chat.channel.title} channel` : "Write your message"} />
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
        marginBottom: 50,
    },
    inputContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
});