import client from './client';
import authStorage from '../auth/storage';

const getFriendChats = () => client.get("/chat/friends/");

const getChat = (friendId, type = "friend") => client.post("/chat/get_chat/", {friendId: friendId.friendId, type });

export default {
    getFriendChats,
    getChat,
};