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

export default function SendMessage({ handleSubmit, handleUpload, placeholder }) {
    const { isRecording, handleRecord } = useRecord(handleSendRecord);
    const [text, setText] = useState(() => { return ""; });
    const [showUpload, setShowUpload] = useState(false);

    const handleFileUpload = async (readableType, uploadedUri = null) => {
        try {
            // -----upload from device-----
            if (readableType !== 'audio') {
                alert("Nope, it's not an audio");
                const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (!granted) return;

                var mediaTypes;
                if (readableType === 'image') mediaTypes = ImagePicker.MediaTypeOptions.Images;
                else if (readableType === 'video') mediaTypes = ImagePicker.MediaTypeOptions.Videos;
                else if (readableType === 'document') mediaTypes = ImagePicker.MediaTypeOptions.All;

                var { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({ mediaTypes: mediaTypes });
            }
            // ------END upload from device

            // -----audio from device-------¸
            else if (readableType === 'audio' && !uploadedUri) {
                alert('UPLOADING AUDIO FROM DEVICE still under developing');
            }
            // -----END audio from device-------¸

            else if (readableType === 'audio' && uploadedUri) {
                // ------send recorded audio-------
                var uri = uploadedUri;
                // todo add ability to stop recortding
                var cancelled = false;
            }

            // ------save file-----
            if (cancelled) return;

            const name = uri.split('/').pop();
            const match = /\.(\w+)$/.exec(name);
            const type = match ? `${readableType}/${match[1]}` : readableType;

            const fd = new FormData();
            fd.append('file', { uri, name, type });
            handleUpload(fd, readableType);
            // -----END save file----

        } catch (error) {
            alert("Error occured");
            logger.log(`Error sending ${readableType}: ${error}`);
        }
    };


    function handleSendRecord({ uri }) {
        handleFileUpload('audio', uri);
    }


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
                            <TouchableOpacity onPress={() => handleFileUpload('image')}>
                                <Icon name="image" backgroundColor={colors.primary} size={50} label="Image" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleFileUpload('video')}>
                                <Icon name="video" backgroundColor={colors.danger} size={50} label="Video" />
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => handleFileUpload('audio')}>
                                <Icon name="headphones" backgroundColor={colors.warning} size={50} label="Audio" />
                            </TouchableOpacity> */}
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