import client from './client';


// General
const getChat = (friendId, type = "friend") => client.post("/chat/get_chat/", { friendId: friendId.friendId, type });
const sendMessage = (text, chatId) => client.post("/chat/send_text_message", { text, chatId })

// Friends
const getFriendChats = () => client.get("/chat/friends/");

// Groups
const getGroupChats = () => client.get("/chat/groups/");
const createGroup = title => client.post("/chat/groups/", {title: title})




export default {
    getChat,
    sendMessage,
    getFriendChats,
    getGroupChats,
    createGroup,
};