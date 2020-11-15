import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ListCard({ children, color = "white" }) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginBottom: 25,
        padding: 10,
    },
})