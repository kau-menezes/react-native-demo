import { FlatList } from "react-native-gesture-handler";
import { Text,StyleSheet, TextStyle, StyleProp, View } from "react-native";
import React from "react";

const data = [
    {
        "year": "2024",
        "name": "Peach Fuzz",
        "hexa": "#FFBE98" 
    },
    {
        "year": "2023",
        "name": "Viva Magenta",
        "hexa": "#BE3455"
    },
    {
        "year": "2022",
        "name": "Very Peri",
        "hexa": "#6868AC"
    },
    {
        "year": "2021",
        "name": "Illuminating",
        "hexa": "#F6EB61"
    },
    {
        "year": "2021",
        "name": "Ultimate Gray",
        "hexa": "#A7A8AA"
    },
    {
        "year": "2020",
        "name": "Classic Blue",
        "hexa": "#0E4C92"
    },
    {
        "year": "2019",
        "name": "Living Coral",
        "hexa": "#FF6F61"
    },
    {
        "year": "2018",
        "name": "Ultra Violet",
        "hexa": "#5F4B8C"
    }
];



export default function List()  {

    return(
        <>
            <FlatList 
            contentContainerStyle={styledList.list}
                data={data} 
                renderItem={({ item }) => {

                    const textColor = item.hexa; 
                    return (
                        <View style={styles({ textColor }).view}>
                            <View style={styles({ textColor }).item}></View>
                            <View>
                                <Text style={styles({ textColor }).title} >PANTONE</Text>
                                <Text style={styles({ textColor }).color}>{item.hexa}</Text>
                                <Text style={styles({ textColor }).color}>{item.name}</Text>
                            </View>
                        </View>
                    );
                }} 
                keyExtractor={item => `${item.year}-${item.name}`} 
            />
        </>
    )
}

const styles = ({ textColor } : { textColor: string }) => StyleSheet.create({
    item: {
        backgroundColor: textColor,
        width: 200,
        padding: 10,
        fontWeight: 600,
        height: 200,
        maxWidth: 200
    },

    title: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        width: 200,
        paddingLeft: 10,
        fontWeight: 700,
        fontSize: 20
    },

    color: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        width: 200,
        paddingLeft: 10,
        fontWeight: 400,
        fontFamily: 'Helvetica', // Regular Helvetica
    },

    view: {
        padding: 10,
        backgroundColor: "#FFFFFF",
    }
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
        flexWrap: "wrap"
    }
})