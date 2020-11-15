import React from 'react';
import { ActivityIndicator as ReactActivityIndicator, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function ActivityIndicator({ animating, size = "large", color = colors.primary }) {
    if (!animating) return null;
    return (
        <ReactActivityIndicator animating={animating} size={size} color={color} />
    );
};

const styles = StyleSheet.create({

});