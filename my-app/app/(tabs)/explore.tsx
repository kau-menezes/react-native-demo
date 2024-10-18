import { StyleSheet, Image, Text, SafeAreaView } from 'react-native';

const data = [
  {
    "name": "name",
    "image": "../../assets/images/react-logo.png"
  }
]


export default function TabTwoScreen() {
  return (
    <>
    <SafeAreaView>
      <Text>expolre ta tabs</Text>
      
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
