import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";

interface IButton {
    value: string,
    color?: string,
    shadowColor?: string,
    textColor?: string,
    onPress: (value : string) => void;
}

const Button = ( button : IButton ) => {
    return(
        <>
            <TouchableOpacity style={styles(button.color, button.shadowColor).button} onPress={ () => button.onPress(button.value)}>
                <Text style={styles(button.color, button.shadowColor, button.textColor).text}>{button.value}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = ( batata?: string, batatinha?: string, batatinhaquandonasce?: string) => StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: batata || "#EAE3DB",
        padding: 10,
        borderRadius: 8,
        width: 60,
        height:60,
        fontFamily: 'Candal',
        borderBottomColor: batatinha || "#B4A297",
        borderBottomWidth: 4,
        margin: 0

    },
    
    text:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Candal",
        fontWeight: 400,
        fontStyle: "normal",
        color: batatinhaquandonasce || "#42485D",
        fontSize: 20,
        margin: 0
    }
})



export default Button;