import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Icon({name, size=40, color= "white", backgroundColor="black", }) {
    return (
        <View style={{
            backgroundColor,
            width: size,
            height: size,
            borderRadius: size / 2,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
        }}>
            <MaterialCommunityIcons name={name} size={size - 25} color={color}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})