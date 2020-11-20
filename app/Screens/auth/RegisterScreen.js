import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import PhoneInput from "react-native-phone-number-input";

import Text from '../../components/text/Text';
import AppButton from '../../components/Button';
import BigHeader from '../../components/text/BigHeader';
import ErrorMessage from '../../components/forms/ErrorMessage';
import ActivityIndicator from '../../components/ActivityIndicator';
import useAuth from '../../hooks/useAuth';

export default function RegisterScreen({ navigation }) {
    const { isInvalid, loading, register } = useAuth();
    return (
        <>
            <View style={styles.iconContainer}>
                <Image source={require('../../assets/icon.png')} style={styles.image} />
                <BigHeader>Orgachat</BigHeader>
            </View>
            {isInvalid && <ErrorMessage error={isInvalid} visible={isInvalid} />}
            { loading ? <ActivityIndicator animating={loading} />
                :
                <Formik
                    initialValues={{ phoneNumber: "" }}
                    onSubmit={values => register(values, navigation)}>
                    {({ handleSubmit, handleChange, errors }) => (
                        <>
                            <Text />
                            <PhoneInput defaultCode="EG" onChangeFormattedText={handleChange("phoneNumber")} />
                            <Text />
                            <AppButton title="Continue" onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
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
})