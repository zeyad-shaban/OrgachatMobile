import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './Text';

export default function BigHeader({ children, style }) {
    return (
        <AppText style={[styles.header, style]}>{children}</AppText>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
    },
});