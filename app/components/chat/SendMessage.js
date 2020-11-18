import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import Icon from '../Icon';

import TextInput from '../inputs/TextInput';

export default function SendMessage({ handleSubmit, text, setText }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Write your message."
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
                width="80%"
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <Icon name="send" size={40} color="white" style={styles.sendMessageContainer} backgroundColor={colors.primary} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "row"
    },
    textInput: {
        textAlign: "left",
        marginHorizontal: 10,
        paddingLeft: 15,
    },
    messagesContainer: {
        position: "absolute",
        right: 0,
        bottom: "100%",
    },
    sendMessageContainer: {
        top: 4,
    },
});