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

import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    console.log(auth.currentUser);
    
  }, [auth.currentUser]);

  useEffect(() => {
    console.log(email, password, passwordConfirm);
    
  }, [email, password]);

  const registerAccount = () => {
    // router.push("/(tabs)");

    createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
      console.log(data);
      router.push('/')
      
    })
    .catch( (err) => {
      alert(err.message);
    })

  };

  console.log(email, password);
  console.log(typeof email, typeof password);

  return (
    <View style={viewStyle.viewzona}>
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
        <Text style={styles.title} >Personal Info</Text>
        <Text style={styles.text}>
          Name<Text style={styles.mandatory}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type your full name..."
          keyboardType="email-address"
          // // onChangeText={setName}
          // value={email}
        />
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
        <Text style={styles.text}>
          Confirm Password<Text style={styles.mandatory}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPasswordConfirm}
          value={passwordConfirm}
          placeholder="Type your password again..."
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={registerAccount}>
          <Text style={styles.buttonText}>CREATE</Text>
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
    </View>
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
  viewzona: {
    flex: 1, // Make sure this takes the full height
    flexDirection: "column",
  },
  view: {
    backgroundColor: "#FFFFFF",
    flex: 1, // This will fill the available space, allowing the footer to stay at the bottom
    padding: "10%",
  },

  footer: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    padding: 4,
    fontSize: 16,
    width: "100%",
  },

  footerText: {
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    fontSize: 16,
    padding: 4,
  },

  footerHeader: {
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    padding: 4,
    fontSize: 24,
    fontWeight: "800",
    width: "100%",
  },

  header: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: "Nunitinho",
    textAlign: "center",
    padding: 4,
    fontSize: 12,
    width: "100%",
  },

  headerBackground: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
});

