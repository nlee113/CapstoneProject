import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import AppButton from '../components/AppButton';
import LoginCreds from '../components/LoginCreds';
import Screen from '../components/Screen';
function LoginScreen(props) {
    return (

        <Screen style = {styles.container}>
            
            <Image style = {styles.backdrop}source = {require("../csusmLogo.jpg")} />
            

            <View style = {styles.appNameContainer}>
                <Text style = {styles.appName}>CougarPool</Text>

            </View>

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
            
            <View style = {styles.buttonsContainer}>

                <AppButton title="Login"/>

            </View>
            
        </Screen>



    );
}
const styles = StyleSheet.create({
    appName: {
        fontSize: 43

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
        marginBottom:30
        
    },
    buttonsContainer: {
        marginTop: 10
    },
    container: {
        padding: 10
    },
    
    
});

export default LoginScreen;