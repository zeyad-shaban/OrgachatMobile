import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import logger from '../utility/logger';


const sound = new Audio.Sound();
export default function AppAudio({ uri }) {
    const [playing, setPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);


    const playAudioHandler = async () => {
        if (loaded) {
            playing ? await sound.pauseAsync() : await sound.playAsync();
            setPlaying(!playing);
        } else {
            try {
                await sound.loadAsync({ uri });
                await Audio.setAudioModeAsync({ staysActiveInBackground: true });

                const playbackStatus = await sound.playAsync();
                setPlaying(playbackStatus.isPlaying);
                setLoaded(playbackStatus.isLoaded);
                setTimeout(() => {
                    sound.unloadAsync();
                    setLoaded(false);
                    setPlaying(false);
                }, playbackStatus.durationMillis);
            } catch (error) {
                alert("Error occured");
                logger.log(error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={playing ? 'pause' : 'play'} size={40} onPress={playAudioHandler} />
        </View>
    );
}

const styles = StyleSheet.create({

});