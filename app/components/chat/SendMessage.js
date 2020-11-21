import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import colors from '../../config/colors';
import Icon from '../Icon';
import TextInput from '../inputs/TextInput';
import useRecord from "../../hooks/useRecord";
import logger from "../../utility/logger";

export default function SendMessage({ handleSubmit, text, setText, placeholder }) {
    const { isRecording, handleRecord } = useRecord(handleUpload);

    async function handleUpload({ uri }) {
        // const sound = new Audio.Sound();
        // try {
        //     await sound.loadAsync(require('../../assets/notif.wav'));
        //     await sound.playAsync();
        //     alert("SOUND IS CURRENTLY PLAYING");
        //     return await sound.unloadAsync();
        // } catch (error) {
        //     logger.log(error);
        // }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder}
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
                width={text.length > 0 ? "80%" : "60%"}
                onChangeText={text => setText(text)}
                value={text}
            />
            <View style={styles.sendContainer}>

                {text.length > 0 ?
                    <TouchableOpacity onPress={handleSubmit}>
                        <Icon name="send" size={40} color="white" backgroundColor={colors.primary} />
                    </TouchableOpacity>
                    :
                    <View style={styles.attatchContainer}>
                        <MaterialCommunityIcons name="attachment" size={30} onPress={() => { alert("File uploading will be aviable in the next update, stay tuned"); }} />
                        <MaterialCommunityIcons name="microphone" size={30} color="black" onPress={handleRecord} style={isRecording && styles.activeRecorder} />
                    </View>
                }
            </View>
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
    sendContainer: {
        top: 4,
    },
    attatchContainer: {
        flexDirection: "row",
    },
    activeRecorder: {
        color: colors.primary,
        fontSize: 45,
        marginLeft: 10,
    },
});