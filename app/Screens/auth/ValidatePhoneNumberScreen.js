import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SmallText from '../../components/text/SmallText';
import AppTextInput from '../../components/inputs/TextInput'
import Separator from '../../components/Separator'

export default function ValidatePhoneNumberScreen({ navigation, route }) {
    const phoneNumber = route.params.phoneNumber;
    const [code, setCode] = useState(() => { return "" });
    const codeUpdated = code => {
        setCode(code);
        if (code.length >= 6) {
            // todo Submit to validate
        }
    }
    return (
        <>
            <View style={styles.container}>
                <SmallText>Check your SMS for validation code.</SmallText>
                <SmallText>{phoneNumber}</SmallText>
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