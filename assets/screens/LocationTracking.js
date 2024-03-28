import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";



function LocationTracking(){
    const [userLocation, setUserLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);

    useEffect(() => {
        const getUserLocation = async () => {
            // getting the users permission to share location
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            // getting users current location
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                enablehighAccuracy: true,
                timeInterval: 5
            });
            setUserLocation(location.coords);
            setInitialRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            });
        };
        
        getUserLocation();
    },[]);
    
    return(
    
         <View style={styles.container}>
            <MapView 
                style={styles.map} showsUserLocation={true} initialRegion={initialRegion}>
               
               

            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        },
        map: {
            width: '100%',
            height: '100%',
        },
    });
export default LocationTracking;