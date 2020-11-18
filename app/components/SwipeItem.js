import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './text/Text';

export default function SwipeItem({ text }) {
    return (
        <View style={styles.container}>
            {text && <AppText>{text}</AppText>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        backgroundColor: "black",
    }
})