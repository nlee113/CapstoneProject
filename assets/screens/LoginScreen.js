import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput, KeyboardAvoidingView, Platform, Button, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import LoginCreds from '../components/LoginCreds';
import Screen from '../components/Screen';

function LoginScreen({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style = {styles.content}>
                    <Screen>
                        <Image style={styles.backdrop} source={require("../csusmLogo.png")} />
                        <View style={styles.appNameContainer}>
                            <Text style={styles.appName}>CougarCarpool</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <LoginCreds 
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="CSUSM Email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="CSUSM Password"
                                secureTextEntry
                                textContentType="password"
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title="Login" onPress={() => navigation.navigate('ScheduleAssistant')}/>
                            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
                        </View>
                    </Screen>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    content: {
        padding: 20, 
    },
    formContainer: {
        alignItems: 'center',
        padding: 20,
    },
    appName: {
        fontSize: 43,
    },
    appNameContainer: {
        alignSelf: "center"
    },
    backdrop: {
        width: '100%',
        height: 270,
        alignSelf: 'auto',
        marginBottom: 30
    },
    buttonsContainer: {
        marginTop: 10
    },
    container: {
        flex: 1,
        padding: 10
    }
});

export default LoginScreen;