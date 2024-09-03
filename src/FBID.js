import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './_style';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';


const FBID = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [gettoken, setToken] = useState('')
    const copyToClipboard = async () => {
        Clipboard.setString(gettoken);
    };

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }

    const getToken = async () => {
        const token = await messaging().getToken()
        console.log("Token = ", token)
        setToken(token)
    }

    async function requestPermissionNotification() {
        ////request permission
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('All Permissions Granted');
            } else {
                console.log('Permission Denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        requestUserPermission()
        getToken()
        requestPermissionNotification()
        // Register the background message handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });
    }, [])

    const handleNavigate = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <SafeAreaView style={styles.appStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <TextInput value={gettoken} placeholder={gettoken} keyboardType='default' />
                    <Text>Press the button to copy text to clipboard</Text>
                    <Button title="Copy FBID" onPress={copyToClipboard} />
                </View>
                <View style={styles.btnBox}>
                    <Button title="Login" onPress={() => handleNavigate('Login')} />
                    <Button title="Signup" onPress={() => handleNavigate('Signup')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FBID