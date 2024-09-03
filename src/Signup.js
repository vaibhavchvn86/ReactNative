import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import styles from './_style';

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    const arePasswordsMatching = password === confirmPassword;

    const isFormValid = isEmailValid && isPasswordValid && arePasswordsMatching && email && password && confirmPassword;

    const handleSignup = () => {
        if (isFormValid) {
            alert('Signup Successful');
        } else {
            alert('Please fill all fields correctly.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>

            <TextInput
                style={[styles.input, !isEmailValid && email ? styles.invalidInput : null]}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={[styles.input, !isPasswordValid && password ? styles.invalidInput : null]}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                style={[styles.input, !arePasswordsMatching && confirmPassword ? styles.invalidInput : null]}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
                style={[styles.button, !isFormValid ? styles.disabledButton : null]}
                onPress={handleSignup}
                disabled={!isFormValid}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.switchText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};



export default Signup;
