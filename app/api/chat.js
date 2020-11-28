import client from './client';
import settings from '../config/settings';

// General
const createFriendChat = friendId => client.post("/chat/create_chat/", { friendId: friendId });
const getChat = ({ chatId, channelId }) => client.get(`/chat/get_chat/${chatId}/?channelId=${channelId}`);

const uploadFile = ({ fd, chatId, channelId, type }) => {
    client.setHeader['content-type'] = 'multipart/form-data';
    return client.post(`/chat/upload_file/${chatId}/${type}/?channelId=${channelId}`, fd);
};

// Friends
const getFriendChats = () => client.get("/chat/friends/");

// Groups
const getGroupChats = () => client.get("/chat/groups/");
const createGroup = title => client.post("/chat/groups/", { title: title });
const addMember = (userId = null, chatId) => client.post('/chat/add_member/', { userId, chatId });
const leaveGroup = chatId => client.get(`/chat/groups/leave_group/${chatId}/`);

// Channels
const createChannel = (title, chatId) => client.post(`/chat/groups/${chatId}/channels/create/`, { title });
const toggleMuteChannel = channelId => client.get(`/chat/groups/channels/toggle_mute_channel/${channelId}/`);


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
    uploadFile,
};