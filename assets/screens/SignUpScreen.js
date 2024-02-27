import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput, Button, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import { SelectCountry } from 'react-native-element-dropdown';
import LoginCreds from '../components/LoginCreds';
import Screen from '../components/Screen';
import * as ImagePicker from 'expo-image-picker';

const local_data = [
    {
        value: 'driver',
        label: 'Driver',
        image: {
            uri: 'https://www.cardiacscreen.co.uk/blog/wp-content/uploads/2016/03/taxi-driver-heart.jpg'
        }
    },
    {
        value: 'passenger',
        label: 'Passenger',
        image: {
            uri: 'https://www.edriving.com/three60/wp-content/uploads/sites/2/2019/05/Woman-putting-seat-belt-on-iStock-1149107466-1024x556.jpg'
        }
    },
];

function SignUpScreen(props) {
    const [selectedValue, setSelectedValue] = useState('driver');
    const [carModel, setCarModel] = useState('');
    const [avatarSource, setAvatarSource] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const handleValueChange = (value) => {
        setSelectedValue(value);
        // Reset car model when switching between driver/passenger
        setCarModel('');
    };
    
    const selectPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setAvatarSource(result.uri);
        }
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
                                placeholder="First and Last Name"
                                keyboardType="default"
                                textContentType="name"
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Gender"
                                keyboardType="default"
                                textContentType="none"
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Age"
                                keyboardType="numeric"
                                textContentType="none"
                            />
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
                                placeholder="Student ID #"
                                keyboardType="numeric"
                                textContentType="none"
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="CSUSM Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            <LoginCreds
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Confirm Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            <SelectCountry
                                style={styles.SelectCountry}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderStyle={styles.placeholderStyle}
                                imageStyle={styles.imageStyle}
                                iconStyle={styles.iconStyle}
                                maxHeight={200}
                                value={selectedValue}
                                data={local_data}
                                valueField="value"
                                labelField="label"
                                imageField="image"
                                placeholder="Driver or Passenger?"
                                onChange={e => handleValueChange(e.value)}
                            />
                            {selectedValue === 'driver' && (
                            <LoginCreds
                                value={carModel}
                                onChangeText={text => setCarModel(text)}
                                placeholder="Car Color, Make and Model"
                            />
                        )}
                        <TouchableOpacity onPress={selectPhoto}>
                            <View style={styles.avatarContainer}>
                                {avatarSource === null ? (
                                    <Text>Select a Photo</Text>
                                ) : (
                                        <Image
                                            source={avatarSource}
                                            style={styles.avatar}
                                        />
                                        )}
                        </View>
                        {avatarSource && ( // Display the selected image only if it exists
                        <View style={styles.avatarPreviewContainer}>
                            <Text style={styles.avatarPreviewText}>Selected Image:</Text>
                            <Image
                                source={{ uri: avatarSource }}
                                style={styles.avatarPreview}
                            />
                        </View>
                    )}
                        </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title="Sign Up"/>
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
    container: {
        flex: 1,
        padding: 10
    },
    avatarPreviewContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    avatarPreviewText: {
        fontSize: 18,
        marginBottom: 10,
    },
    avatarPreview: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default SignUpScreen;