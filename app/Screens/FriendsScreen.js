import React from 'react';
import chatApi from '../api/chat';
import GetChats from '../components/chat/GetChats';

export default function FriendsScreen() {
    return (
        <GetChats apiFunc={chatApi.getFriendChats} BbIcon={"account-plus"} BbNavigateTo={"AddChats"} />
    );
};