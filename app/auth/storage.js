import * as SecureStore from 'expo-secure-store';
import JwtDecode from 'jwt-decode';
import logger from '../utility/logger';

const key = "authToken";
const storeToken = async token => {
    try {
        return await SecureStore.setItemAsync(key, token);
    } catch (error) {
        logger.log("Error storing token: ", error);
    }
};
const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);

    } catch (error) {
        logger.log("Error getting token: ", error);
    }
};
const getUser = async () => {
    const token = await getToken();
    return token ? JwtDecode(token) : null;
};
const deleteToken = async () => {
    try {
        return await SecureStore.deleteItemAsync(key);
    } catch (error) {
        logger.log("Error deleting token: ", error);
    }
};

export default {
    storeToken,
    getToken,
    getUser,
    deleteToken,
};