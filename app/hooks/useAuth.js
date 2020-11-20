import { useContext, useState } from "react";

import AuthContext from "../auth/context";
import authStorage from '../auth/storage';
import authApi from '../api/auth';

export default function useAuth() {
    const { user, setUser } = useContext(AuthContext);
    if (user) user.id = user.user_id;

    const [loading, setLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const register = async (email, navigation) => {
        setLoading(true);
        setIsInvalid(false);
        const response = await authApi.register(email);
        setLoading(false);
        if (!response.ok) return setIsInvalid(response.data.error);
        navigation.navigate("Login", {email});
    };

    const login = async (email, code) => {
        setLoading(true);
        const response = await authApi.login(email, code);
        setLoading(false);
        if (!response.ok) return setIsInvalid(true);

        setIsInvalid(false);
        const token = response.data.access;
        await authStorage.storeToken(token);
        setUser(await authStorage.getUser());
    };
    const logout = () => {
        setUser(null);
        authStorage.deleteToken();
    };
    return { user, setUser, register, loading, isInvalid, setIsInvalid, login, logout };
};