import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import IconButton from '../components/IconButton';
import chatApi from '../api/chat'
import TextInput from '../components/inputs/TextInput';
import ErrorMessage from '../components/forms/ErrorMessage';

export default function AddGroupScreen({ navigation }) {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const response = await chatApi.createGroup(title);
        setLoading(false);
        if (!response.ok) return setError(true);
        setError(false)
        // todo fix need to refresh to see new group
        return navigation.navigate("Groups")
    };
    return (
        <View style={styles.container}>
            <TextInput value={title} onChangeText={text => setTitle(text)} placeholder="Group title" width="70%" maxLength={50} />
            <IconButton name="plus" backgroundColor="green" onPress={handleSubmit} />
            <ActivityIndicator animating={loading} />
            <ErrorMessage error="Failed to create group, please try again later" visible={error} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    }
})