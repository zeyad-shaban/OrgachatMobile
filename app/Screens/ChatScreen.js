import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../components/text/Text';

export default function ChatScreen({ route }) {
    const chat = route.params;
    return (
        <View>
            <AppText>{ chat.friend.username }</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    
})