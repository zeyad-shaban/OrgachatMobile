import client from './client';


const getFriendChats = () => client.get("/chat/friends/");

const getChat = (friendId, type = "friend") => client.post("/chat/get_chat/", { friendId: friendId.friendId, type });

const getGroupChats = () => client.get("/chat/groups/");

const sendMessage = (text, chatId) => client.post("/chat/send_text_message", { text, chatId })

export default {
    getFriendChats,
    getChat,
    sendMessage,
    getGroupChats,
};