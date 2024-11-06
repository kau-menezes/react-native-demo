import { Image, StyleSheet, Text, View } from "react-native";
// import { Inter_100Thin, useFonts } from "@expo-google-fonts/inter";

interface Color {
    name: string;
    textColor: string;
    hexa: string;
}

const Card = ({ color }: { color: Color }) => {
    const { name, textColor, hexa } = color;

    return (
        <View style={styles().view}>
            <View style={[styles().item, { backgroundColor: hexa }]}></View>
            <View>
                <Text style={styles(textColor).title}>PANTONE</Text>
                <Text style={styles(textColor).color}>{hexa}</Text>
                <Text style={styles(textColor).color}>{name}</Text>
                {/* Uncomment this line if you have an image property */}
                {/* <Image style={styles(textColor).image} source={item.image}/> */}
            </View>
        </View>
    );
};

const styles = (textColor?: string) => StyleSheet.create({
    item: {
        backgroundColor: textColor || "#FFFFFF", // Default color if not provided
        width: 200,
        padding: 10,
        height: 200,
        maxWidth: 200,
    },
    title: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        width: 200,
        paddingLeft: 10,
        fontWeight: "700",
        fontSize: 20,
    },
    color: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        width: 200,
        paddingLeft: 10,
        fontWeight: "400",
        fontFamily: 'Helvetica',
    },
    view: {
        padding: 10,
        backgroundColor: "#FFFFFF",
    },
    image: {
        width: 30,
        height: 30,
    },
});

const styledList = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginTop: 50,
        marginBottom: 50,
        flexWrap: "wrap",
    },
});

export default Card;
