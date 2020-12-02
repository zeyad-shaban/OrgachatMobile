import { useEffect, useRef, useState } from "react";
import { w3cwebsocket } from "websocket";

import chatApi from '../api/chat';
import logger from "../utility/logger";


const useChat = (socketUrl, chatId, channelId=nullw) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState();
    const [chat, setChat] = useState({});

    const socket = useRef(null);
    const [connected, setConnected] = useState(false);

    // ---------receive messages---------
    useEffect(() => {
        if (!connected) {
            setLoading(true);
            chatApi.getChat({ chatId, channelId })
                .then(({ data, ok }) => {
                    setLoading(false);
                    if (!ok) { logger.log('Error connecting to the chat: ', data); return alert("Error Occured"); }
                    setChat(data.chat);
                    setMessages(data.messages);
                });
        }

        if (!connected) {
            socket.current = new w3cwebsocket(socketUrl);
            setConnected(true);
        }

        socket.current.onopen = () => setConnected(true);

        socket.current.onclose = () => setConnected(false);

        // ---------END receive messages---------

        return () => {
            setConnected(false);
            return socket.current.close();
        };
    }, []);

    // ------send message-------
    const handleSendMessage = text => socket.current.send(
        JSON.stringify({
            text,
            channelId: channelId,
        })
    );

    const handleUpload = async (fd, type) => {
        const { data: message } = await chatApi.uploadFile({ fd, chatId, channelId, type });
        socket.current.send(JSON.stringify({
            message,
            channelId,
        }));
    };
    // ------END send message-------


    return { socket: socket.current, messages, setMessages, loading, chat, handleSendMessage, handleUpload };
};

export default useChat;