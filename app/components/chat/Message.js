import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';
import useAuth from '../../hooks/useAuth';
import MessageHeader from './MessageHeader';

export default function Message({ sender, area=null, children, type = "friend" }) {
    const { user } = useAuth();
    return (
        <View style={styles.container}>
            <View style={[styles.content, sender.id === user.id ? styles.self : styles.other]}>
            {type==="group" && sender.id !== user.id && <MessageHeader username={sender.username} area={area} />}
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    content: {
        maxWidth: "70%",
        paddingLeft: 10,
        paddingVertical: 5,
        elevation: 2.5,
        borderRadius: 10,
        paddingRight: 35,
    },
    self: {
        backgroundColor: colors.reader,
        alignSelf: "flex-end",
    },
    other: {
        backgroundColor: colors.light,
        alignSelf: "flex-start",
    }
})