import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Image } from 'react-native-expo-image-cache';

import colors from '../../config/colors';
import Text from '../text/Text';
import Icon from '../Icon';

export default function ListItem({ title, subTitle, imageUri, onPress, renderRightActions, renderLeftActions, ImageComponent, iconName, backgroundColor }) {
    return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {ImageComponent}
                    {imageUri && <Image uri={imageUri} preview={{ uri: imageUri }} tint="light" style={styles.image} />}
                    {iconName && <Icon name={iconName} backgroundColor={backgroundColor} />}
                    <View style={styles.listText}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    icon: {
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 200,
        marginRight: 10
    },
    listText: {
        marginTop: 3
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    subTitle: {
        color: "#555",
        marginTop: 3
    },
})