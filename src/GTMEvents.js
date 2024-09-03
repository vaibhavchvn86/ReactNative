import GoogleTagManager from 'react-native-google-tag-manager';

export const pushGTMEvent = (eventData) => {
    GoogleTagManager.pushDataLayerEvent(eventData)
        .then(() => {
            console.log("Event pushed to GTM");
        })
        .catch((err) => {
            console.error("Failed to push event to GTM", err);
        });
};
