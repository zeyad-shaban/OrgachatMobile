import client from './client';

const register = expoPushToken => client.post('users/save_expo_push_token', { expoPushToken });

export default {
    register,
};