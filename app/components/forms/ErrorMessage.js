import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../text/Text';

export default function ErrorMessage({ error, visible }) {
    if (!visible) return null;
    return (
        <Text style={styles.text}>{error}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});