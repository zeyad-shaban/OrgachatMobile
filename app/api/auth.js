import client from './client';

const login = (email, email_code) => client.post('/token/', { email, password: email_code })
const register = email => client.post('/register/', { email, username: "", groups: [] });

const updateLastSeen = () => client.get('/users/update_last_seen/')

export default {
    register,
    login,
    updateLastSeen,
};