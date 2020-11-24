import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';

import colors from '../../config/colors';
import Icon from '../Icon';
import TextInput from '../inputs/TextInput';
import useRecord from "../../hooks/useRecord";
import logger from "../../utility/logger";
import chatApi from "../../api/chat";

export default function SendMessage({ handleSubmit, handleUpload, placeholder }) {
    const { isRecording, handleRecord } = useRecord(handleSendRecord);
    const [text, setText] = useState(() => { return ""; });
    const [showUpload, setShowUpload] = useState(false);

    async function handleSendRecord({ uri }) {
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

    const handleImageUpload = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) return;
        try {
            const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Images});
            if (!cancelled) {
                const fd = new FormData();
                fd.append('uri', uri)
                handleUpload(fd, 'image')
            }

        } catch (error) {
            alert("Error occured");
            logger.log("Error sending image: " + error);
        }
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
                    <TouchableOpacity onPress={() => { handleSubmit(text); return setText(""); }}>
                        <Icon name="send" size={40} color="white" backgroundColor={colors.primary} />
                    </TouchableOpacity>
                    :
                    <>
                        {showUpload && <View style={styles.uploadContainer}>
                            <Icon name="file" backgroundColor={colors.secondary} size={50} label="Document" />
                            <TouchableOpacity onPress={handleImageUpload}>
                                <Icon name="image" backgroundColor={colors.primary} size={50} label="Image" />
                            </TouchableOpacity>
                            <Icon name="video" backgroundColor={colors.danger} size={50} label="Video" />
                            <Icon name="music" backgroundColor={colors.warning} size={50} label="Sound" />
                        </View>}
                        <View style={styles.attachContainer}>
                            <MaterialCommunityIcons name="attachment" size={30} onPress={() => setShowUpload(!showUpload)} />
                            <MaterialCommunityIcons name="microphone" size={30} color="black" onPress={handleRecord} style={isRecording && styles.activeRecorder} />
                        </View>
                    </>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: colors.light,
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
    uploadContainer: {
        width: 240,
        height: 170,
        backgroundColor: colors.white,
        position: "absolute",
        flexDirection: "row",
        bottom: 70,
        right: 30,
        alignSelf: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "center",
        padding: 10,
    },
    attachContainer: {
        flexDirection: "row",
    },
    activeRecorder: {
        color: colors.primary,
        fontSize: 45,
        marginLeft: 10,
    },
});