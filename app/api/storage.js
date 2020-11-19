import client from './client';
import * as SecureStore from 'expo-secure-store';
import logger from '../utility/logger';

const key = "authToken";

const storeToken = async authToken => {
    try {
        return await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        logger.log("Error storing auth token: ", error);
    };
};
const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        logger.log("Error getting auth token: ", error);
    };
};
const removeToken = async () => {
    try {
        return await SecureStore.deleteItemAsync(key);
    } catch (error) {
        logger.log("Error deleting auth token: ", error);
    };
};

export default {
    storeToken,
    getToken,
    removeToken,
};