import React from 'react';
import { StyleSheet, View } from 'react-native';

import SmallText from '../../components/text/SmallText';
import AppTextInput from '../../components/inputs/TextInput'
import Separator from '../../components/Separator'
import ErrorMessage from '../../components/forms/ErrorMessage';
import ActivityIndicator from '../../components/ActivityIndicator';
import useAuth from '../../hooks/useAuth';

export default function LoginScreen({ route }) {
    const email = route.params.email;
    const { loading, isInvalid, setIsInvalid, login } = useAuth();
    const codeUpdated = async code => {
        setIsInvalid(false);
        if (code.length >= 6) {
            login(email, code)
        }
    }
    return (
        <>
            <ActivityIndicator animating={loading} />
            <ErrorMessage error="Invalid code" visible={isInvalid} />
            <View style={styles.container}>
                <SmallText>Check your SMS for validation code.</SmallText>
                <SmallText>{email}</SmallText>
                <Separator />
                <AppTextInput placeholder="Six digit code" width="50%" onChangeText={codeUpdated} maxLength={6} style={styles.digitsInput} autoFocus keyboardType="number-pad" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        alignItems: "center",
        marginTop: 20,
    },
    digitsInput: {
        fontSize: 23,
        letterSpacing: 3,
    }
})