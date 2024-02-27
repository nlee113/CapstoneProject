import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Colors from './Colors';

function LoginCreds({...otherProps}) {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.textInput} {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        flexDirection: "row",
        width:"100%",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 18
    },

});

export default LoginCreds;