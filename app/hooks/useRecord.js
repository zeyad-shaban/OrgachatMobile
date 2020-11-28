import { useState } from "react";
import { Audio } from 'expo-av';

import logger from '../utility/logger';

const useRecord = (handleUpload, uploadParams) => {
    const [isRecording, setIsRecording] = useState(false);
    const [recording, setRecording] = useState(new Audio.Recording());

    const handleRecord = async () => {
        const { granted } = await Audio.requestPermissionsAsync();
        if (!granted) return;

        if (isRecording) {
            await recording.stopAndUnloadAsync();
            handleUpload({ uri: recording.getURI(), ...uploadParams });
            setRecording(new Audio.Recording());
            return setIsRecording(false);
        }

        try {
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY);
            await recording.startAsync();
            return setIsRecording(true);
        } catch (error) {
            alert("Error Occured");
            logger.log("Error recording voice message: " + error);
        }
    };
    return { isRecording, handleRecord };
};

export default useRecord;