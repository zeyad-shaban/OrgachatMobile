import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconButton from '../components/IconButton';
import TextInput from '../components/inputs/TextInput';
import ActivityIndicator from '../components/ActivityIndicator';
import ErrorMessage from '../components/forms/ErrorMessage';
import Button from '../components/Button';
import colors from '../config/colors';
import chatApi from '../api/chat';
import ListItem from '../components/lists/ListItem';

export default function GroupOptionsScreen({ visible, setVisible, chat }) {
    const navigation = useNavigation();
    const [channelTitle, setChannelTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSaveChannel = async () => {
        setLoading(true);
        const response = await chatApi.createChannel(channelTitle, chat.id);
        setLoading(false);
        if (!response.ok) return setError(true);
        setError(false)
        // todo fix need to refresh to see new channel (CONTEXT)
        return
    };
    return (
        <Modal visible={visible} animationType="slide">
            <Button title="Close" onPress={() => setVisible(false)} />
            <View style={styles.container}>
                <TextInput value={channelTitle} onChangeText={text => setChannelTitle(text)} placeholder="Add a channel" width="70%" maxLength={30} />
                <IconButton name="plus" backgroundColor={colors.primary} onPress={handleSaveChannel} />
                <ActivityIndicator animating={loading} />
                <ErrorMessage error="Failed to create channel, please try again or report the problem" visible={error} />
            </View>
            <FlatList
                data={chat.channels}
                keyExtractor={item => JSON.stringify(item.id)}
                renderItem={({ item }) => (
                    <ListItem title={`#${item.title}`} onPress={() => { setVisible(false); return navigation.push('Chat', { chat, channelId: item.id }) }} />
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