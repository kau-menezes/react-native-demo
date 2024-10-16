import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

const Header = ({ image } : {image: ImageSourcePropType | undefined}) => {
    return(
        <>
            <View style={styles.background}>
                <Text style={styles.batata}>header goes here</Text>
                <Image style={styles.image} source={ image }/>
            </View>
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
        color: "#FBFBFB",
        fontWeight: "600"
    }, 
    
    image: {
        width: 300,
        height: 100
    }
});

export default Header;