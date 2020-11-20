import client from './client';

const login = (email, email_code) => client.post('/token/', { email, password: email_code })
const register = email => client.post('/register/', { email, username: "", groups: [] });

export default {
    register,
    login,
};