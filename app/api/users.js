import client from './client';

const getUsers = () => client.get('/users/all/');
const getFriends = () => client.get('/users/friends/');
const editAccount = values => client.post('/users/update_account/', {username: values.username, about: values.about})

export default {
    getUsers,
    getFriends,
    editAccount,
};