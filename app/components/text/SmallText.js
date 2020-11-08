import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from './Text';

export default function SmallText({ children, style, ...otherProps }) {
    return (
        <AppText style={[styles.text, style]} {...otherProps}>{children}</AppText>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.medium,
    }
});