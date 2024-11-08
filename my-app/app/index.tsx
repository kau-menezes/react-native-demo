import Row from "@/components/Row";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import WideButton from "@/components/WideButton";
import Button from "@/components/Button";
import Button1 from "@/components/Button1";
import Row1 from "@/components/Row1";

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
  const [sci, setSci] = useState(false);
  
  const sciFi = (value: string) => {
    console.log(sci);
    setSci(!sci);
  }

  // Function to handle the button press
  const handlePress = (value: string) => {
    if (value === "DEL") {
      setFirst(first.slice(0, -1));
    }
    else if (value === "RESET") {
      setFirst("");
    }
    else if (value === "=") {
      try {
        let op = first.replace("÷", "/").replace("x", "*").replace("π", "3.14");
        
        setFirst(eval(op).toString()); 
      } catch (e) {
        setFirst("Error");
      }
    }
    else if (value === "√") {
      console.log(Math.sqrt(parseFloat(first)));
      
      setFirst(Math.sqrt(parseFloat(first)).toString());
    }
    else if (value === "%") {
      setFirst((parseFloat(first) / 100).toString());
    }
    else if (value === "∑") {
      setFirst(first.split('').reduce((sum, num) => sum + parseFloat(num), 0).toString());
    }
    else {
      setFirst(first + value);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.baseCalculator}>
          <Button1
          onPress={sciFi}
          value={"📊"}
          color={"#636B83"}
          shadowColor={"#3D445C"}
          textColor={"#FFFFFF"}
          />
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{first}</Text>
          </View>
          {sci ? 
          <View style={styles.sciFi}>
            <Row1 btn1="∑" btn2="√" btn3="%" btn4="π" onPress={handlePress} />
          </View>
            : null
          }

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
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    width: "100%",
  },

  sciFi: {
    backgroundColor: "#252D44",
    borderRadius: 8,
    borderColor: "#181E33",
    borderBottomWidth: 8,
  },

  baseCalculator: {
    minHeight: "70%",
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
    borderColor: "#181E33",
    borderBottomWidth: 8,
  },

  resultContainer: {
    backgroundColor: "#252D44",
    flex: 2,
    borderRadius: 8,
    borderColor: "#181E33",
    borderBottomWidth: 8,
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
});j