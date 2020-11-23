import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Image } from 'react-native-expo-image-cache';

import colors from '../../config/colors';
import Text from '../text/Text';
import Icon from '../Icon';

export default function ListItem({
    title,
    subTitle,
    imageUri,
    onPress,
    renderRightActions,
    renderLeftActions,
    ImageComponent,
    iconName,
    backgroundColor,
    size = 60,
    textColor = "black",
    badge=0,
    badgeColor = colors.primary
}) {
    return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {ImageComponent}
                    {imageUri && <Image uri={imageUri} preview={{ uri: imageUri }} tint="light" style={{ width: size, height: size, borderRadius: 200, marginRight: 10 }} />}
                    {iconName && <Icon name={iconName} backgroundColor={backgroundColor} />}
                    <View style={styles.listText}>
                        <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>{title}</Text>
                        <Text style={[styles.subTitle, { color: textColor }]} numberOfLines={2}>{subTitle}</Text>
                    </View>
                    {badge > 0 && 
                            <View style={[styles.badge, { backgroundColor: badgeColor }]}>
                                <Text style={styles.badgeText}>{badge}</Text>
                            </View>
                    }
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
    badge: {
        width: 30,
        height: 30,
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 20,
        alignSelf: "center"
    },
    badgeText: {
        color: "white"
    }
});