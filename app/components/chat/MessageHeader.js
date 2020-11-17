import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import Text from '../text/Text';

export default function MessageHeader({ username, channel = null }) {
    return (
        <Text style={styles.text}>{username} { channel && `#${channel}`}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingBottom: 5,
        color: colors.danger,
    },
});