import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default function AppText({ style, children, ...otherProps }) {
    return (
    <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Open Sans",
    }
})