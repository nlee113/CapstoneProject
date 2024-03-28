import React, { useState, useEffect } from "react";
import { async } from "@firebase/util";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import UploadImage from "../functions/UploadImage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  DocumentSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLIQZgWzh-iuIVZpS6rAwn9nf-TYBgNaI",
  authDomain: "cougarcarpool.firebaseapp.com",
  projectId: "cougarcarpool",
  storageBucket: "cougarcarpool.appspot.com",
  messagingSenderId: "78550730579",
  appId: "1:78550730579:web:3b13df5e6ec076146e43a6",
  measurementId: "G-B4PGZ3EKS0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
let docRef;
let data;

function ProfileUpdatePage({ navigation }) {
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false); // State to track if data has been loaded

  const handleUpdateProfile = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userUid = user.uid;
        docRef = doc(firestore, userUid, "data");

        await updateDoc(docRef, {
          car: {
            make: carMake,
            model: carModel,
            color: carColor,
          },
        });

        console.log("Profile updated successfully!");
        alert("Profile updated successfully!");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
        console.log("Signed out");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign Out failed:", errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userUid = user.uid;
        console.log("User UID:", userUid);
        docRef = doc(firestore, userUid, "data");

        try {
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            // Document exists, access its data
            data = docSnapshot.data();
            console.log("Document data:", data);
            setDataLoaded(true); // Set dataLoaded to true after data is loaded
          } else {
            console.log("Document does not exist");
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      }
    });

    return unsubscribe;
  }, []);

  if (!dataLoaded) {
    return <ActivityIndicator />; // Render loading indicator while data is being fetched
  }

  if (data && data.passenger) {
    return (
      <View style={styles.container}>
        <UploadImage></UploadImage>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <UploadImage></UploadImage>
        <Text style={styles.label}>Car Make</Text>
        <TextInput
          style={styles.input}
          value={carMake}
          onChangeText={setCarMake}
          placeholder={data.car.make}
        />
        <Text style={styles.label}>Car Model</Text>
        <TextInput
          style={styles.input}
          value={carModel}
          onChangeText={setCarModel}
          placeholder={data.car.model}
        />
        <Text style={styles.label}>Car Color</Text>
        <TextInput
          style={styles.input}
          value={carColor}
          onChangeText={setCarColor}
          placeholder={data.car.color}
        />
        <Button title="Update Profile" onPress={handleUpdateProfile} />
        <Button title="Sign Out" color="red" onPress={handleSignOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ProfileUpdatePage;
