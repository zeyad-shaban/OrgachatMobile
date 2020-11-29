import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Video } from 'expo-av';

import colors from '../../config/colors';
import useAuth from '../../hooks/useAuth';
import MessageHeader from './MessageHeader';
import Text from '../text/Text';
import settings from "../../config/settings";
import Audio from "../Audio";

export default function Message({ type = "friend", message }) {
    const { user } = useAuth();
    const sender = message.user;
    const channel = message.channel;

    let content = <Text>{message.content}</Text>;

    if (message.type === 'image') content = (
        <TouchableWithoutFeedback onPress={() => { alert('todo navigate to the image'); }}>
            <Image source={{ uri: `${settings.apiUrl}${message.content}`, width: 150, height: 150 }} />
        </TouchableWithoutFeedback>
    );
    else if (message.type === 'audio') content = <Audio uri={`${settings.apiUrl}${message.content}`} />;
    else if (message.type === 'document') content = (<Text>Orgachat: This is a document message 🗂, sorry we are still working on this 🤧</Text>);
    else if (message.type === 'video') content = <Video
        source={{ uri: `${settings.apiUrl}${message.content}` }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        style={{ width: 150, height: 150 }}
        useNativeControls
        usePoster
    />;

    return (
        <View style={styles.container}>
            <View style={[styles.content, sender.id === user.id ? styles.self : styles.other]}>
                {type === "group" && sender.id !== user.id && <MessageHeader username={sender.username} channel={channel} />}
                {content}
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
});