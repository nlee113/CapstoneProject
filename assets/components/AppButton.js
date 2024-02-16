import React from 'react';
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import Colors from './Colors';

function AppButton({title}) {
    return (
        <TouchableOpacity style={styles.button}>

            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.universityBlue,
        borderRadius: 25,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 15,
        width: "100%",


    },
    text: {
        fontSize: 18,
        textTransform: "uppercase",
        color: Colors.white,
        fontWeight: "bold",
        
    }

})

export default AppButton;