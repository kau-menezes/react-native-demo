import Row from "@/components/Row";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import WideButton from "@/components/WideButton";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Candal: require("../assets/fonts/Candal-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    // Show a loading spinner until fonts are loaded
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    // Handle font loading error
    return <Text>Error loading fonts</Text>;
  }

  const [first, setFirst] = useState("");

  // Function to handle the button press
  const handlePress = (value: string) => {
    // If DEL is pressed, remove the last character
    if (value === "DEL") {
      setFirst(first.slice(0, -1));
    }
    // If RESET is pressed, clear the input
    else if (value === "RESET") {
      setFirst("");
    }
    // If = is pressed, evaluate the expression
    else if (value === "=") {
      try {
        setFirst(eval(first).toString()); // Evaluates the expression
      } catch (e) {
        setFirst("Error");
      }
    }
    // Otherwise, concatenate the value to the current input
    else {
      setFirst(first + value);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.baseCalculator}>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{first}</Text>
          </View>
          <View style={styles.miniContainer}>
            <Row
              btn1="7"
              btn2="8"
              btn3="9"
              btn4="DEL"
              btn4Color="#64719B"
              btn4ShadowColor="#384462"
              btn4TextColor="#FFFFFF"
              onPress={handlePress}
            />
            <Row btn1="4" btn2="5" btn3="6" btn4="+" onPress={handlePress} />
            <Row btn1="1" btn2="2" btn3="3" btn4="-" onPress={handlePress} />
            <Row btn1="." btn2="0" btn3="÷" btn4="x" onPress={handlePress} />
            <View style={styles.wideButtonContainer}>
              <WideButton
                value="="
                color="#D13F30"
                textColor="#FFFFFF"
                shadowColor="#94261B"
                onPress={handlePress}
              />
              <WideButton
                value="RESET"
                color="#64719B"
                shadowColor="#384462"
                textColor="#FFFFFF"
                onPress={handlePress}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    width: "100%",
  },

  container: {
    backgroundColor: "#3B4664",
    flex: 1, // This makes the container take up 90% of the available height
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    width: "100%",
  },

  baseCalculator: {
    minHeight: "50%",
    justifyContent: "space-between",
    width: "85%",
    gap: 10,
  },

  miniContainer: {
    display: "flex",
    justifyContent: "space-around",
    height: 330,
    backgroundColor: "#252D44",
    flex: 7,
    width: "100%",
    borderRadius: 8,
  },

  resultContainer: {
    backgroundColor: "#252D44",
    flex: 2,
    borderRadius: 8,
  },

  result: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "10%",
    fontFamily: "Candal",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#EAE3DB",
    fontSize: 30,
    width: "100%",
    height: "100%",
  },

  wideButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});


// import Row from '@/components/Row';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   View,
//   ActivityIndicator,
// } from "react-native";
// import WideButton from '@/components/WideButton';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {

//   const [loaded, error] = useFonts({
//     // Candal: require("@/assets/fonts/Candal-Regular.ttf"),
//     Candal: require("../assets/fonts/Candal-Regular.ttf"),

//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     // Show a loading spinner until fonts are loaded
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   if (error) {
//     // Handle font loading error
//     return <Text>Error loading fonts</Text>;
//   }

//   const [first, setfirst] = useState();

//     return (    
//     <View style={styles.safe} >
//       <View style={styles.container}>
//         <View style={styles.baseCalculator}>
//           <View style={styles.resultContainer}>
//               <Text style={styles.result}>{first}</Text>
//           </View>
//           <View style={styles.miniContainer}>
//               <Row btn1={"7"} btn2={"8"} btn3={"9"} btn4={"DEL"} btn4Color='#64719B' btn4ShadowColor='#384462' btn4TextColor='#FFFFFF'></Row>
//               <Row btn1={"4"} btn2={"5"} btn3={"6"} btn4={"+"}></Row>
//               <Row btn1={"1"} btn2={"2"} btn3={"3"} btn4={"-"}></Row>
//               <Row btn1={"."} btn2={"0"} btn3={"÷"} btn4={"x"}></Row>
//               <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10}}>
//                 <WideButton value='=' color='#D13F30' textColor='#FFFFFF' shadowColor='#94261B'></WideButton>
//                 <WideButton value='RESET' color='#64719B' shadowColor='#384462' textColor='#FFFFFF'></WideButton>
//               </View>
//           </View>
//         </View>
//         {/* <Text style={{ fontFamily: 'Candal' }}>This text will use the Candal font</Text> */}
//       </View>
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   baseCalculator: {
//     minHeight: "50%",
//     justifyContent: "space-between",
//     width: "85%",
//     gap: 10
//   },

//   safe: {
//     flex: 1,
//     width: "100%",
//   },  

//   miniContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//     height: 330,
//     backgroundColor:"#252D44",
//     flex: 7,
//     width: "100%",
//     borderRadius: 8
//   },

//   resultContainer: {
//     backgroundColor: "#252D44",
//     flex: 2,
//     borderRadius: 8

//   },

//   result: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingRight: "10%",
//     fontFamily: "Candal",
//     fontWeight: 400,
//     fontStyle: "normal",
//     color: "#EAE3DB",
//     fontSize: 30,
//     width: "100%",
//     height: "100%",
//   },
  
//   container: {
//     backgroundColor: "#3B4664",
//     flex: 1, // This makes the container take up 90% of the available height
//     justifyContent: 'center', // Centers content vertically
//     alignItems: 'center', // Centers content horizontally
//     width: "100%",
//   },
// })
