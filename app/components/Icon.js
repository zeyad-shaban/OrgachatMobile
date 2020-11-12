import React from 'react';
import { View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icon({ name, size = 25, color = colors.white, backgroundColor = colors.primary }) {
    const areaSize = size + 20
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor,
            borderRadius: areaSize / 2,
            width: areaSize,
            height: areaSize,
        }}>
            <MaterialCommunityIcons name={name} size={size} color={color} />
        </View>
    );
}
