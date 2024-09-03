import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { pushGTMEvent } from './GTMEvents';

const Dashboard = () => {
    const handleButtonClick = () => {
        pushGTMEvent({
            event: "button_click",
            category: "User Interaction",
            action: "Click",
            label: "Another Button",
            value: 1,
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.btnBox}>
                <Button title="Event 1" onPress={() => handleButtonClick()} />
                {/* <Button title="Event 2" onPress={() => handleNavigate('Signup')} /> */}
            </View>
        </SafeAreaView>
    )
}

export default Dashboard