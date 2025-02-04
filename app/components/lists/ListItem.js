import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Image } from 'react-native-expo-image-cache';

import colors from '../../config/colors';
import Text from '../text/Text';
import Icon from '../Icon';
import RightBadge from "../RightBadge";

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
    badge,
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
                        <Text style={[styles.subTitle, { color: textColor }]} numberOfLines={1}>{subTitle}</Text>
                    </View>
                    {badge && 
                        <RightBadge backgroundColor={badgeColor} content={badge}>
                            <Text style={[styles.badgeText, {color: 'white'}]}>{badge}</Text>
                        </RightBadge>
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
        marginTop: 3,
        fontSize: 14,
    },
    
});