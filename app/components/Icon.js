import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from './text/Text';

export default function Icon({ name, size = 40, color = "white", backgroundColor = "black", style, label }) {
    return (
        <View style={[label && styles.container]}>
            <View style={[{
                backgroundColor,
                width: size,
                height: size,
                borderRadius: size / 2,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
            }, style]}>
                <MaterialCommunityIcons name={name} size={size - 20} color={color}
                />
            </View>
            {label && <Text style={styles.label}>{label}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: "black",
        alignSelf: "center",
        fontSize: 13,
    }
});