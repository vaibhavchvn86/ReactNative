import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    appStyle: {
        width: "100%",
        height: "100%"
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    btnBox: {
        marginTop: 10,
        gap: 10
    },
    highlight: {
        fontWeight: '700',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
    invalidInput: {
        borderColor: 'red',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    disabledButton: {
        backgroundColor: '#9E9E9E',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    switchText: {
        textAlign: 'center',
        color: '#007BFF',
        fontSize: 16,
    },
});
