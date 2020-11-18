import client from './client';


// General
const createFriendChat = (friendId) => client.post("/chat/create_chat/", { friendId: friendId.friendId });
const sendMessage = (text, chatId) => client.post("/chat/send_text_message/", { text, chatId });
const getChat = ({ chatId, channelId }) => client.get(`/chat/get_chat/${chatId}/?channelId=${channelId}`);
// Friends
const getFriendChats = () => client.get("/chat/friends/");

// Groups
const getGroupChats = () => client.get("/chat/groups/");
const createGroup = title => client.post("/chat/groups/", { title: title })

// Channels
const createChannel = (title, chatId) => client.post(`/chat/groups/${chatId}/channels/create/`, { title })
const toggleMuteChannel = channelId => client.get(`/chat/groups/${channelId}/channels/toggle_mute/`)

export default {
    createFriendChat,
    sendMessage,
    getChat,
    getFriendChats,
    getGroupChats,
    createGroup,
    createChannel,
    toggleMuteChannel
};