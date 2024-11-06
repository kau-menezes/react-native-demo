import { FlatList } from "react-native-gesture-handler";
import { Text, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from "@/firebaseConfig";
import Card from "@/components/Card";

interface Color {
    name: string;
    hexa: string;
}

const data = [
    {
        "year": "2024",
        "name": "Peach Fuzz",
        "hexa": "#FFBE98",
        // "image": "../../assets/images/react-logo.png" 
    },
    {
        "year": "2023",
        "name": "Viva Magenta",
        "hexa": "#BE3455",
        // "image": "../../assets/images/react-logo.png"
    },
    {
        "year": "2022",
        "name": "Very Peri",
        "hexa": "#6868AC",
        // "image": "../../assets/images/react-logo.png"
    },
    {
        "year": "2021",
        "name": "Illuminating",
        "hexa": "#F6EB61",
        // "image": "../../assets/images/react-logo.png"
    },
    {
        "year": "2021",
        "name": "Ultimate Gray",
        "hexa": "#A7A8AA",
        // "image": "../../assets/images/react-logo.png"
    },
    {
        "year": "2020",
        "name": "Classic Blue",
        "hexa": "#0E4C92",
        // "image": "../../assets/images/react-logo.png"
    },
    {
        "year": "2019",
        "name": "Living Coral",
        "hexa": "#FF6F61",
        // "image": "../../assets/images/react-logo.png"
    },
    {
        "year": "2018",
        "name": "Ultra Violet",
        "hexa": "#5F4B8C",
        // "image": "../../assets/images/react-logo.png"
    }
];

export default function List() {
    const [colors, setColors] = useState<Color[]>([]);

    useEffect(() => {
        // Subscribe to the 'colors' collection
        const unsubscribe = onSnapshot(collection(FIREBASE_DB, 'colors'), (snapshot) => {
            const colorsList = snapshot.docs.map(doc => doc.data() as Color);
            console.log("Fetched colors:", colorsList);
            setColors(colorsList); // Update state with the fetched data
        }, (error) => {
            console.error("Error fetching colors:", error);
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    console.log("Colors state:", colors);

    return (
        <View style={styledList.container}>
            <FlatList 
                contentContainerStyle={styledList.list}
                data={colors} 
                renderItem={({ item }) => {
                    return (
                        <Card color={{ name: item.name, hexa: item.hexa, textColor: item.hexa }} />
                        // <Text style={{ color: item.hexa }}>{item.hexa} {item.name}</Text>
                    );
                }} 
                keyExtractor={(item, index) => `${item.name}-${index}`} // Use index for uniqueness
            />
        </View>
    );
}

const styledList = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
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
});
