import React from 'react';
import chatApi from '../api/chat';
import GetChats from '../components/chat/GetChats';

export default function FriendsScreen() {
    return (
        <GetChats apiFunc={chatApi.getGroupChats} BbIcon="plus" BbNavigateTo="AddGroup" />
    );
}