import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../lists/ListItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

export default function ChatHeader({ title, subTitle, imageUri, onPress }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="keyboard-backspace" style={styles.icon} color="white" size={30} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPress}>
                <ListItem title={title} subTitle={subTitle} imageUri={imageUri} onPress={onPress} size={45} textColor="white" />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 3,
    },
    icon: {
        marginRight: 5,
    }
})