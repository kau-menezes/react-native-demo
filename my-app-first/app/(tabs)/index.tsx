import { FIREBASE_DB } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

interface Colors {
  name?: string, 
  hexa?: string
}

export default function HomeScreen() {

  const [name, setName] = useState("");
  const [hexa, setHexa] = useState("");

  useEffect(() => {
    console.log(name, hexa);
    
  }, [name, hexa]);

  const addProduct = async () => {
    const newColor: Colors = { name, hexa };

    if (newColor.name === "") {
      Alert.alert("Color must have a name");
      return;
    }

    setName(name.concat(name, "#"));

    var newName= "#" + name;

    // // Optional: Validate hexadecimal color code
    // if (!/^#([0-9A-F]{3}){1,2}$/i.test(newColor.hexa)) {
    //   Alert.alert("Please enter a valid hexadecimal code");
    //   return;
    // }

    await addDoc(collection(FIREBASE_DB, "colors"), {name: newName, hexa: hexa});
    console.log(newColor);

    // Reset inputs
    setName("");
    setHexa("");
  };
    
  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.text}>
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type its name..."
          onChangeText={setName}
          value={name}
        />
      </View>
      <View>
        <Text style={styles.text}>
          Hexadecimal code
        </Text>
        <TextInput
          style={styles.inputHexa}
          placeholder="Type its hexadecimal code..."
          onChangeText={setHexa}
          value={hexa}
          
        />
        <Text style={styles.hexa}>#</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addProduct}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>
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
    color: "#000000",
    position: "relative",
  },

  inputHexa: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: "#e3e3e3",
    fontFamily: "Nunitinho", // Regular Helvetica
    color: "#000000",
    position: "relative",
    paddingLeft: 40
  },

  button: {
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 10,
    borderRadius: 4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  hexa: {
    height: 20,
    width: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
    borderColor: "#e3e3e3",
    fontFamily: "Nunitinho", // Regular Helvetica
    color: "#444444",
    shadowColor: "#000000",
    shadowRadius: 2,
    position: "absolute",
    top: 30,
    left: 10
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

  view: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    padding: "10%",
  }
});
