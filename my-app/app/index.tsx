import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Image } from "expo-image";

import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    console.log(auth.currentUser);
    
  }, [auth.currentUser]);

  useEffect(() => {
    console.log(email, password);
    
  }, [email, password]);

  const logIn = () => {
    // router.push("/(tabs)");

    signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      console.log(data);
      router.push('/(tabs)')
      
    })
    .catch( (err) => {
      alert(err.message);
    })

  };

  const registerAccount = () => {
    router.push("/register");
  };

  console.log(email, password);
  console.log(typeof email, typeof password);

  return (
    <>
      <View style={viewStyle.headerBackground}>
        <View style={viewStyle.header}>RECIEVE OUR NEWSLETTER</View>
        <Image
          style={styles.image}
          source={"../assets/images/pantone-logo.png"}
        />
      </View>
      <View style={viewStyle.view}>
        <View>
          <Text style={styles.title}>MY PANTONE ACCOUNT</Text>
          <Text style={styles.subtitle}>Log into yout Pantone.com account</Text>
        </View>
        <Text style={styles.text}>
          E-mail<Text style={styles.mandatory}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type your e-mail..."
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.text}>
          Password<Text style={styles.mandatory}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Type your password..."
          keyboardType="numeric"
        />
        <View style={styles.flex}>
          <Text style={styles.secondaryText}>Remember Me</Text>
          <Text style={styles.secondaryText}>Forgot my Passord</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={logIn}>
          <Text style={styles.buttonText}>ENTER</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>CREATE MY ACCOUNT</Text>
          <Text style={styles.subtitle}>
            You can register to become a customer during the checkout process.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={registerAccount}>
          <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>

        {/* <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={viewStyle.background}
            />
        </View> */}
      </View>
      <View style={viewStyle.footer}>
        <Text style={viewStyle.footerHeader}>Newsletter</Text>
        <Text style={viewStyle.footerText}>
          Stay up to date on new products, color trend reports, webinars,
          special offers and more.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: "#e3e3e3",
    fontFamily: "Nunitinho", // Regular Helvetica
    color: "#a8a8a8",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  text: {
    fontFamily: "Nunitinho",
    fontWeight: "600",
    fontSize: 14,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 20,
  },

  subtitle: {
    fontFamily: "Nunitinho",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 20,
  },

  mandatory: {
    color: "#FF4D4F",
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  secondaryText: {
    fontFamily: "Nunitinho",
    fontWeight: "600",
    fontSize: 14,
    margin: 5,
    // width: "50%"
  },

  image: {
    width: 150,
    height: 30,
    margin: 10,
  },
});

const viewStyle = StyleSheet.create({
  view: {
    backgroundColor: "#FFFFFF",
    height: "80%",
    padding: "10%",
  },

  footer: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    padding: 4,
    fontSize: 16,
    width: "100%",
    height: "20%"
  },

  footerText: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    padding: 4,
    fontSize: 16,
    width: "100%",
  },

  footerHeader: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    padding: 4,
    fontSize: 24,
    fontWeight: "800",
    width: "100%",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  header: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    textAlign: "center",
    padding: 4,
    fontSize: 12,
    width: "100%",
    height: "30%"
  },

  headerBackground: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
});
