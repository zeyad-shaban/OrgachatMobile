import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import useAuth from "../../hooks/useAuth";
import TextInput from '../../components/inputs/TextInput';
import { Formik } from 'formik';
import Text from "../../components/text/Text";
import Button from "../../components/Button";
import ActivityIndicator from '../../components/ActivityIndicator';
import usersApi from "../../api/users";
import SmallText from '../../components/text/SmallText';

export default function EditAccountScreen({ navigation }) {
    const { user, setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async values => {
        setLoading(true);
        const { ok } = await usersApi.editAccount(values);
        setLoading(false);
        if (!ok) return setError(true);
        setError(false);
        setUser({ ...user, username: values.username, about: values.about });
        navigation.navigate('Account');
    };
    return (
        <>
            <Formik
                initialValues={{ username: user.username, about: user.about }}
                // ? ValidationSchema
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        {loading ? <ActivityIndicator animating={loading} />
                            :
                            <>
                                <Text>Username </Text>
                                <TextInput value={values.username} onChangeText={handleChange('username')} maxLength={30} />
                                <Text />
                                <Text>About</Text>
                                <TextInput value={values.about} onChangeText={handleChange('about')} maxLength={190} />
                                <Text />
                                <Button title="Save changes" onPress={handleSubmit} />
                            </>
                        }
                    </>
                )}
            </Formik>
            <Text />
            <SmallText>Known issues: You need to logout then login to your account to see changes you made on your device.</SmallText>
        </>
    );
}

const styles = StyleSheet.create({

});