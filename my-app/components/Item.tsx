import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Inter_100Thin, useFonts } from "@expo-google-fonts/inter";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

const Item = ({ image } : {image: ImageSourcePropType | undefined}) => {

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
            <Image style={styles.image} source={ image }/>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20

    },
});

export default Item;