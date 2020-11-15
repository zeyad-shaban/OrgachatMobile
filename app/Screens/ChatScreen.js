import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../components/text/Text';

export default function ChatScreen({ route }) {
    const chat = route.params.chat;
    const messages = route.params.messages;
    const type = chat.type
    return (
        <View>
        </View>
    );
}

const styles = StyleSheet.create({
    
})