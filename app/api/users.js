import client from './client';

const endpoint = '/users/all/';

const getUsers = () => { return client.get(endpoint); };

export default {
    getUsers,
}