import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconButton from '../../components/IconButton';
import TextInput from '../../components/inputs/TextInput';
import ActivityIndicator from '../../components/ActivityIndicator';
import ErrorMessage from '../../components/forms/ErrorMessage';
import Button from '../../components/Button';
import colors from '../../config/colors';
import chatApi from '../../api/chat';
import ListItem from '../../components/lists/ListItem';
import GroupSettingsScreen from './GroupSettingsScreen';

export default function GroupOptionsScreen({ visible, setVisible, chat }) {
    const navigation = useNavigation();
    const [channels, setChannels] = useState(chat.channels)
    const [channelTitle, setChannelTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSaveChannel = async () => {
        setError(false);
        setLoading(true);
        const response = await chatApi.createChannel(channelTitle, chat.id);
        setLoading(false);
        if (!response.ok) return setError(true);
        setError(false);
        const channel = {
            id: channels && channels.length > 0 ? channels[channels.length -1].id + 1 : 1,
            title: channelTitle,
        }
        setChannels([channel, ...channels])
        return
    };
    return (
        <Modal visible={visible} animationType="slide">
            <Button title="Close" onPress={() => setVisible(false)} />
            <ListItem iconName="settings" title='Settings' onPress={() => {navigation.navigate("GroupSettings", { chat }); return setVisible(false)}} />
            <View style={styles.container}>
                <TextInput value={channelTitle} onChangeText={text => setChannelTitle(text)} placeholder="Add a channel" width="70%" maxLength={30} />
                <IconButton name="plus" backgroundColor={colors.primary} onPress={handleSaveChannel} />
            </View>
            <ActivityIndicator animating={loading} />
            <ErrorMessage error="Failed to create channel, please try again or report the problem" visible={error} />
            <FlatList
                data={channels}
                keyExtractor={item => JSON.stringify(item.id)}
                renderItem={({ item }) => (
                    <ListItem title={`#${item.title}`} onPress={() => { setVisible(false); return navigation.push('Chat', { chat, channelId: item.id }); }} />
                )}
            />
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
});