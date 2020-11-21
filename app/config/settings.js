import Constants from 'expo-constants';

const settings = {
    dev: {
        apiUrl: "http://10.0.3.2:8000",
        wsUrl: "ws://10.0.3.2:8000/ws/",
    },
    staging: {
        apiUrl: "https://orgachat.herokuapp.com",
        wsUrl: "wss://orgachat.herokuapp.com/ws/",
    },
    prod: {
        // todo change to orgachat.com after buying heroku subscription for 25$
        apiUrl: "https://orgachat.herokuapp.com",
        wsUrl: "wss://orgachat.herokuapp.com/ws/",
    },
};

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === "staging") return settings.staging;
    return settings.prod;
};

export default getCurrentSettings();