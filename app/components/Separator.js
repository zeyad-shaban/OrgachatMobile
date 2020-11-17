import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export default function Separator(props) {
    return (
        <>
            <View style={styles.separator} />
            <Text />
        </>
    );
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.light,
        width: "60%",
        height: 1,
        alignSelf: "center",
    },
});