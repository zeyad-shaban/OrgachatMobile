import client from './client';

const getUsers = () => client.get('/users/all/');
const getFriends = () => client.get('/users/friends/');

export default {
    getUsers,
    getFriends,
};