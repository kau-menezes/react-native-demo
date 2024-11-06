import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Inter_100Thin, useFonts } from "@expo-google-fonts/inter";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

const Header = ({ image } : {image: ImageSourcePropType | undefined}) => {

    const [loaded, error] = useFonts({
        "aaa": Inter_100Thin,
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

    return(
        <>
            <View style={styles.background}>
                {/* <Text  style={styles.cenoura}>header goes here</Text> */}
                <Image style={styles.image} source={ image }/>
            </View>
            {/* <Text style={styles.batata}> oooooooooooooooooi  </Text> */}
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
        // height: 

    },

    batata: {
        // color: "#FBFBFB",
        fontWeight: "600",
        fontFamily: "Robotinho"
    }, 

    cenoura: {
        fontFamily: "aaa"
    },
    
    image: {
        width: 300,
        height: 100
    }
});

export default Header;