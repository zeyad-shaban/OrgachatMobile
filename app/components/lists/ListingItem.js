import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../config/colors';
import Icon from '../Icon';
import AppText from '../text/Text';

export default function ListingItem({ children, iconName, onPress, backgroundColor = colors.primary, color = "white" }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={iconName} style={styles.icon} backgroundColor={backgroundColor} color={color} />
            <AppText style={styles.text}>{children}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.light,
        paddingVertical: 10,
    },
    text: {
        marginLeft: 10,
        marginBottom: 4,
        fontSize: 20,
    },
})