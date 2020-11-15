import client from './client';

const login = (phone_number, phone_code) => client.post('/token/', { phone_number, password: phone_code })
const register = phone_number => client.post('/register/', { phone_number, username: "", groups: [] });

export default {
    register,
    login,
};