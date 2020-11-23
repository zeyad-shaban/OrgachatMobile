import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from "../config/colors";
import Text from './text/Text';


export default function RightBadge({ backgroundColor = colors.primary, content, children }) {
    return (
        <View style={[styles.badge, { backgroundColor }]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        width: 30,
        height: 30,
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 20,
        alignSelf: "center",
    },
});