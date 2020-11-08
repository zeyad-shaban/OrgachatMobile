import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PhoneInput from "react-native-phone-number-input";

import AppText from '../../components/text/Text';
import AppButton from '../../components/Button';
import BigHeader from '../../components/text/BigHeader';

const validationSchema = Yup.object().shape({
    phonenumber: Yup.number().min(6).max(19),
})

export default function WelcomeScreen({ navigation }) {
    return (
        <>
            <View style={styles.iconContainer}>
                <Image source={require('../../assets/icon.png')} style={styles.image} />
                <BigHeader>Orgachat</BigHeader>
                <View>
                    <AppText>Very organized chat app</AppText>
                    <AppText>Perfect for simple and complex chats</AppText>
                </View>
            </View>
            <Formik
                initialValues={{ phoneNumber: "" }}
                validationSchema={validationSchema}
                onSubmit={values => navigation.navigate("ValidatePhoneNumber", values)}>
                {({ handleSubmit, handleChange, errors }) => (
                    <>
                        <AppText />
                        <PhoneInput defaultCode="EG" onChangeFormattedText={handleChange("phoneNumber")} />
                        <AppText>{errors.phoneNumber}</AppText>
                        <AppButton title="Continue" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <View style={styles.createAccountContainer}>

            </View>
            <View style={styles.buttonContainer}>
            </View>
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

    buttonContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",

    }
})