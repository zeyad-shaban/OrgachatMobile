import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';

import Text from '../../components/text/Text';
import AppButton from '../../components/Button';
import BigHeader from '../../components/text/BigHeader';
import ErrorMessage from '../../components/forms/ErrorMessage';
import ActivityIndicator from '../../components/ActivityIndicator';
import useAuth from '../../hooks/useAuth';
import TextInput from '../../components/inputs/TextInput';

export default function RegisterScreen({ navigation }) {
    const { isInvalid, loading, register } = useAuth();
    const [email, setEmail] = useState("");

    return (
        <>
            <View style={styles.iconContainer}>
                <Image source={require('../../assets/icon.png')} style={styles.image} />
                <BigHeader>Orgachat</BigHeader>
            </View>
            {isInvalid && <ErrorMessage error={isInvalid} visible={isInvalid} />}
            { loading ? <ActivityIndicator animating={loading} />
                :
                <>
                    <Text />
                    <TextInput onChangeText={email => setEmail(email)} autoCompleteType="email" keyboardType="email-address" textContentType="emailAddress" placeholder="Email Address" />
                    <Text />
                    <AppButton title="Continue" onPress={() => register(email, navigation)} />
                </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: "center",
    },
    image: {
        width: 140,
        height: 140,
        marginVertical: 20,
    },
});