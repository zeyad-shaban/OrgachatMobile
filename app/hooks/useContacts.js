import { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';

export default function useContacts(props) {
    // todo not getting contacts
    const [contacts, setContacts] = useState([]);
    const [granted, setGranted] = useState(false);
    const askContactsPerm = async () => {
        const { granted } = await Contacts.requestPermissionsAsync();
        setGranted(granted);
    }
    useEffect(() => {
        askContactsPerm();
    }, [])
    return { contacts, granted, askContactsPerm };
};