import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

import Icon from './Icon';

export default function BottomButton({ name, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.icon}>
                <Icon name={name} size={60} backgroundColor={colors.primary} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        right: 10,
        bottom: 10,
    },
});