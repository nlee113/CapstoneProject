import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  ScrollView,
} from "react-native";
import LoginCreds from "../components/LoginCreds";
import Screen from "../components/Screen";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("EditProfile");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login failed:", errorMessage);
        alert("Login Failed: Ensure you have the proper login information");
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Screen>
            <Image
              style={styles.backdrop}
              source={require("../csusmLogo.png")}
            />
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
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <LoginCreds
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="CSUSM Password"
                secureTextEntry
                textContentType="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button title="Login" onPress={handleLogin} />
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
              />
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
    justifyContent: "center",
  },
  content: {
    padding: 20,
  },
  formContainer: {
    alignItems: "center",
    padding: 20,
  },
  appName: {
    fontSize: 40,
  },
  appNameContainer: {
    alignSelf: "center",
  },
  backdrop: {
    width: "100%",
    height: 270,
    alignSelf: "auto",
    marginBottom: 30,
  },
  buttonsContainer: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

export default LoginScreen;
