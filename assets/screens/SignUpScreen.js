import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput, Button, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import { SelectCountry } from 'react-native-element-dropdown';
import LoginCreds from '../components/LoginCreds';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import UploadImage from '../functions/UploadImage';
import Screen from '../components/Screen';
import * as ImagePicker from 'expo-image-picker';

const local_data = [
    {
        value: true,
        label: 'Driver',
        image: {
            uri: 'https://www.cardiacscreen.co.uk/blog/wp-content/uploads/2016/03/taxi-driver-heart.jpg'
        }
    },
    {
        value: false,
        label: 'Passenger',
        image: {
            uri: 'https://www.edriving.com/three60/wp-content/uploads/sites/2/2019/05/Woman-putting-seat-belt-on-iStock-1149107466-1024x556.jpg'
        }
    },
];

function SignUpScreen(props) {
    state = { 
        details: [], 
        first_name: "", 
        last_name: "",
        gender: "",
        age: "",
        email: "",
        password: "",
        id_num: "",
        driver: "",
        color: "",
        make: "",
        model: "",
    }; 
    const [selectedValue, setSelectedValue] = useState(true);
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [make, setMake] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [first_name, setFirst_name] = useState('');
    const [last_name,setLast_name] = useState('');
    const [gender, setGender] = useState('');
    const [age,setAge] = useState('');
    const [email, setEmail] = useState('');
    const [id_num, setId_num] = useState('');
    const [driver,setDriver] = useState('');




    
    const handleSignUp = (e) => {
        e.preventDefault(); 
        // Check if passwords match
        if (password === confirmPassword) {
            // Proceed with sign-up
            console.log('Passwords match! Proceed with sign-up.');
            // Navigate to scheduling page
            props.navigation.navigate('ScheduleAssistant');
            axios 
            .post("http://localhost:8000/wel/", { 
                first_name: first_name, 
                last_name: last_name,
                gender: gender,
                age: age,
                email: email,
                password: password,
                id_num: id_num,
                driver: driver,
                color: color,
                make: make,
                model: model,
            }) 
            .then((res) => { 
                console.log("Sign up successful:", res.data);
            }) 
            .catch((err) => { 
                // handle error
                console.error("Sign up failed:", err);
            }); 
        } else {
            // Show error message
            console.log('Passwords do not match. Please enter matching passwords.');
            setPasswordsMatch(false);
        }
    };

    const handleInput = (name, value) => {
        switch (name) {
            case 'first_name':
                setFirst_name(value);
                break;
            case 'last_name':
                setLast_name(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirm_password':
                setConfirmPassword(value);
                break;
            case 'id_num':
                setId_num(value);
                break;
            case 'driver':
                setDriver(value);
                handleValueChange(e.value);
                break;
            case 'color':
                setColor(value);
                break;
            case 'make':
                setMake(value);
                break;
            case 'model':
                setModel(value);
                break;
            default:
                break;
        }
    };

    const handleValueChange = (value) => {
        setSelectedValue(value);
    };

    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style = {styles.content}>
                    <Screen>
                        <View style={styles.formContainer}>
                            <LoginCreds
                                autoCapitalize="words"
                                autoCorrect={false}
                                placeholder="First Name"
                                keyboardType="default"
                                textContentType="name"
                                value={first_name}
                                onChangeText={text => handleInput('first_name', text)}
                            />
                            <LoginCreds
                                autoCapitalize="words"
                                autoCorrect={false}
                                placeholder="Last Name"
                                keyboardType="default"
                                textContentType="name"
                                value={last_name} 
                                onChangeText={text => handleInput('last_name', text)}
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Gender"
                                keyboardType="default"
                                textContentType="none"
                                value={gender}
                                onChangeText={text => handleInput('gender', text)}
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Age"
                                keyboardType="numeric"
                                textContentType="none"
                                value={age}
                                onChangeText={text => handleInput('age', text)}
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="CSUSM Email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                value={email}
                                onChangeText={text => handleInput('email', text)}
                            />
                            <LoginCreds
                                value={password}
                                onChangeText={text => handleInput('password',text)}
                                placeholder="CSUSM Password"
                                secureTextEntry
                                textContentType="password"
                                
                            />
                            <LoginCreds
                                onChangeText={text => handleInput('confirm_password',text)}
                                placeholder="Confirm Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            {!passwordsMatch && <Text style={styles.errorMessage}>Passwords do not match.</Text>}
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Student ID #"
                                keyboardType="numeric"
                                textContentType="none"
                                value={id_num}
                                onChangeText={text => handleInput('id_num',text)}
                            />
                            <SelectCountry
                                style={styles.SelectCountry}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderStyle={styles.placeholderStyle}
                                imageStyle={styles.imageStyle}
                                iconStyle={styles.iconStyle}
                                maxHeight={200}
                                value={driver}
                                data={local_data}
                                valueField="value"
                                labelField="label"
                                imageField="image"
                                placeholder="Driver or Passenger?"
                                onChange={e => handleInput('driver',e.value)}
                            />
                            {selectedValue === driver && (
                            <View>
                            <LoginCreds
                            value={color}
                            onChangeText={text => handleInput('color',text)}
                            placeholder="Car Color"
                            />
                            <LoginCreds
                            value={make}
                            onChangeText={text => handleInput('make',text)}
                            placeholder="Car Make"
                            />
                            <LoginCreds
                                value={model}
                                onChangeText={text => handleInput('model',text)}
                                placeholder="Car Model"
                            />
                            </View>
                        )}
                        </View>
                            <View style={styles.container}><UploadImage></UploadImage>
                            </View>
                        <View style={styles.buttonsContainer}>
                            <Button title="Sign Up"onPress={handleSignUp}/>
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
    errorMessage: {
        color: 'red',
        marginBottom: 10,
    },
    content: {
        padding: 20, 
    },
    formContainer: {
        alignItems: 'center',
        padding: 20,
    },
    SelectCountry: {
        margin: 16,
        height: 50,
        width: 150,
        backgroundColor: '#fafafa',
        borderRadius: 22,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    buttonsContainer: {
        marginTop: 10
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
      },
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 10
    }
});

export default SignUpScreen;