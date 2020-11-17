import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useApi from '../../hooks/useApi';
import BottomButton from '../BottomButton';
import Separator from '../Separator';
import ListItem from '../lists/ListItem';
import ActivityIndicator from '../ActivityIndicator';

export default function GetChats({ apiFunc, BbIcon, BbNavigateTo, navigateTo = "Chat" }) {
    const navigation = useNavigation();
    const { data: chats, loading, error, } = useApi(apiFunc);
    return (
        <>
            <ActivityIndicator animating={loading} />
            <FlatList
                data={chats}
                keyExtractor={item => JSON.stringify(item.id)}
                ItemSeparatorComponent={() => (<Separator />)}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.lastMessagge}
                        imageUri={"https://www.orgachat.com" + item.imageUri}
                        onPress={() => navigation.navigate(navigateTo, { chat: item })}
                    />
                )}
            />
            {BbIcon && BbNavigateTo && <BottomButton name={BbIcon} onPress={() => navigation.navigate(BbNavigateTo)} />}
        </>
    );
};