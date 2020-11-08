import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import colors from '../../config/colors'

export default function AppTextInput({width="100%", style, ...otherProps}) {
    return (
        <TextInput style={[styles.input, {width}, style]} {...otherProps} />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.light,
        height: 40,
        borderRadius: 20,
        marginVertical: 5,
        textAlign: "center",
        fontSize: 18
    }
})