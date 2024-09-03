/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import GoogleTagManager from 'react-native-google-tag-manager';

GoogleTagManager.openContainerWithId("GTM-5WN55TX5")
    .then(() => {
        console.log("Container Loaded");
    })
    .catch((err) => {
        console.error("Container loading failed", err);
    });


AppRegistry.registerComponent(appName, () => App);
