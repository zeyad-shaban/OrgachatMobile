import React from 'react';
import { Button, StyleSheet } from 'react-native';
import colors from "../config/colors";

export default function AppButton({ title, color=colors.primary, onPress }) {
    return (
        <Button title={title} color={color} style={styles.button} onPress={onPress} />
    );
}

const styles = StyleSheet.create({
    button:{
        
    }
})