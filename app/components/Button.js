import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default function AppButton({ title, color, onPress }) {
    return (
        <Button title={title} color={color} style={styles.button} onPress={onPress} />
    );
}

const styles = StyleSheet.create({
    button:{
        
    }
})