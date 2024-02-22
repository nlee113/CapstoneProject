import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import LoginCreds from '../components/LoginCreds';
import Screen from '../components/Screen';

function LoginScreen(props) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style = {styles.content}>
                    <Screen>
                        <Image style={styles.backdrop} source={require("../csusmLogo.jpg")} />
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
                            <AppButton title="Login"/>
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
        alignSelf: "center",
        marginBottom: 100
    },
    backdrop: {
        width: "100%",
        height: 300,
        alignSelf: "center",
        marginTop: 10,
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