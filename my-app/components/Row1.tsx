// import Button from "@/components/Button"
// import {
//     SafeAreaView,
//     StyleSheet,
//     TextInput,
//     Text,
//     TouchableOpacity,
//     View,
//   } from "react-native";

// interface IButtons {
//     btn1: string, 
//     btn2: string, 
//     btn3: string, 
//     btn4: string,
//     btn1Color?: string, 
//     btn2Color?: string, 
//     btn3Color?: string, 
//     btn4Color?: string,
//     btn1ShadowColor?: string, 
//     btn2ShadowColor?: string, 
//     btn3ShadowColor?: string, 
//     btn4ShadowColor?: string,
//     btn1TextColor?: string, 
//     btn2TextColor?: string, 
//     btn3TextColor?: string, 
//     btn4TextColor?: string,
//     function: (value : string) => void;
// }

// const Row = ({function, btn1, btn2, btn3, btn4, btn1Color, btn2Color, btn3Color, btn4Color, btn1ShadowColor, btn2ShadowColor, btn3ShadowColor, btn4ShadowColor, btn1TextColor, btn2TextColor, btn3TextColor, btn4TextColor} : IButtons) => {
//     return(
//         <View style={styles.view}>
//             <Button onPress={} value={btn1} color={btn1Color} shadowColor={btn1ShadowColor} textColor={btn1TextColor}></Button>
//             <Button onPress={} value={btn2} color={btn2Color} shadowColor={btn2ShadowColor} textColor={btn2TextColor}></Button>
//             <Button onPress={} value={btn3} color={btn3Color} shadowColor={btn3ShadowColor} textColor={btn3TextColor}></Button>
//             <Button onPress={} value={btn4} color={btn4Color} shadowColor={btn4ShadowColor} textColor={btn4TextColor}></Button>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     view: {
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         fontFamily: "Candal",
//         maxHeight: "15%"
//     }
// })

// export default Row;

import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "@/components/Button";

interface IButtons {
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn1Color?: string;
  btn2Color?: string;
  btn3Color?: string;
  btn4Color?: string;
  btn1ShadowColor?: string;
  btn2ShadowColor?: string;
  btn3ShadowColor?: string;
  btn4ShadowColor?: string;
  btn1TextColor?: string;
  btn2TextColor?: string;
  btn3TextColor?: string;
  btn4TextColor?: string;
  onPress: (value: string) => void;
}

const Row1 = ({
  btn1,
  btn2,
  btn3,
  btn4,
  btn1Color,
  btn2Color,
  btn3Color,
  btn4Color,
  btn1ShadowColor,
  btn2ShadowColor,
  btn3ShadowColor,
  btn4ShadowColor,
  btn1TextColor,
  btn2TextColor,
  btn3TextColor,
  btn4TextColor,
  onPress,
}: IButtons) => {
  return (
    <View style={styles.view}>
      <Button
        onPress={onPress}
        value={btn1}
        color={btn1Color}
        shadowColor={btn1ShadowColor}
        textColor={btn1TextColor}
      />
      <Button
        onPress={onPress}
        value={btn2}
        color={btn2Color}
        shadowColor={btn2ShadowColor}
        textColor={btn2TextColor}
      />
      <Button
        onPress={onPress}
        value={btn3}
        color={btn3Color}
        shadowColor={btn3ShadowColor}
        textColor={btn3TextColor}
      />
      <Button
        onPress={onPress}
        value={btn4}
        color={btn4Color}
        shadowColor={btn4ShadowColor}
        textColor={btn4TextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    fontFamily: "Candal",
    paddingTop: 8
    // maxHeight: "15%",
  },
});

export default Row1;
