import { useContext, useState } from "react";

import AuthContext from "../auth/context";
import authStorage from '../auth/storage';
import authApi from '../api/auth'

export default function useAuth() {
    const { user, setUser } = useContext(AuthContext);
    if (user) user.id = user.user_id;

    const [loading, setLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const register = async (values, navigation) => {
            setLoading(true)
            setIsInvalid(false);
            const response = await authApi.register(values.phoneNumber);
            setLoading(false)
            if (!response.ok) return setIsInvalid(true);
            navigation.navigate("Login", values)
    }
    
    const login = async (phoneNumber, code) => {
        setLoading(true)
        const response = await authApi.login(phoneNumber, code);
        setLoading(false)
        if (!response.ok) return setIsInvalid(true);

        setIsInvalid(false);
        const token = response.data.access;
        authStorage.storeToken(token);
        setUser(authStorage.getUser());
    }
    const logout = () => {
        setUser(null);
        authStorage.deleteToken();
    };
    return { user, setUser, register, loading, isInvalid, setIsInvalid, login, logout };
};