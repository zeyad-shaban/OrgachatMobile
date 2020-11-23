import client from './client';


// General
const createFriendChat = friendId => client.post("/chat/create_chat/", { friendId: friendId });
const getChat = ({ chatId, channelId }) => client.get(`/chat/get_chat/${chatId}/?channelId=${channelId}`);
// Friends
const getFriendChats = () => client.get("/chat/friends/");

// Groups
const getGroupChats = () => client.get("/chat/groups/");
const createGroup = title => client.post("/chat/groups/", { title: title });
const addMember = (userId = null, chatId) => client.post('/chat/add_member/', { userId, chatId });
const leaveGroup = chatId => client.get(`/chat/groups/leave_group/${chatId}/`)

// Channels
const createChannel = (title, chatId) => client.post(`/chat/groups/${chatId}/channels/create/`, { title });
const toggleMuteChannel = channelId => client.get(`/chat/groups/${channelId}/channels/toggle_mute/`);

export default {
    createFriendChat,
    getChat,
    getFriendChats,
    getGroupChats,
    createGroup,
    addMember,
    leaveGroup,
    createChannel,
    toggleMuteChannel,
};