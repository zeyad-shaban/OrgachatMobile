import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SendMessage from '../components/chat/SendMessage';
import Text from '../components/text/Text';
import Message from '../components/chat/Message';
import useAuth from '../hooks/useAuth';
import colors from '../config/colors';
import ChatHeader from '../components/chat/ChatHeader';


export default function ChatScreen({ route }) {
    const chat = route.params.chat;

    const [text, setText] = useState("");
    const [messages, setMessages] = useState(chat.messages);
    const { user } = useAuth();

    // Web Socket connection, and sending messages
    const chatSocket = new WebSocket(
        // todo DELETE USERID
        `ws://10.0.3.2:8000/ws/chat/${chat.id}/?userId=${user.user_id}`,
    );
    useEffect(() => {
        chatSocket.onmessage = e => {
            const data = JSON.parse(e.data);
            var lastMessageId = 0
            if (messages.length > 0) return lastMessageId = messages[messages.length - 1].id + 1
            const message = {
                "id": lastMessageId,
                "channel": null,
                "chat": chat.id,
                "is_deleted": false,
                "is_read": false,
                "content": data.message.content,
                "isText": data.message.isText,
                "user": user,
                "video": "",
            };
            setMessages([...messages, message])
        };
    }, [])

    const handleSubmit = () => {
        chatSocket.send(JSON.stringify({
            text: text
        }));
        setText("");
    };

    return (
        <>
            <View style={styles.container}>
                <ChatHeader title={chat.title} imageUri={"https://www.orgachat.com" + chat.imageUri} />
                <View style={styles.messagesContainer}>
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
                    <SendMessage text={text} setText={setText} handleSubmit={handleSubmit} />
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
        width: "100%"
    },
})