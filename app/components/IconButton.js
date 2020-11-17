import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from './Icon';

export default function IconButton({ name, size = 40, onPress, backgroundColor }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                {backgroundColor ? <Icon name={name} backgroundColor={backgroundColor} /> : <MaterialCommunityIcons name={name} size={size} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
})