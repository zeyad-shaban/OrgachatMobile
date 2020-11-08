import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './Text';

export default function ChatTitle({ children }) {
    return (
        <AppText style={styles.titleText}>{children}</AppText>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "600",
        marginBottom: 2
    }
})