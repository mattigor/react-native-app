import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function App() {
  const handleButtonPress = () => {
    console.log("Botão pressionado");
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/radio.jpg")}
        style={styles.radio}
      />
      <TouchableOpacity style={styles.button1} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button5} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button6} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button7} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button8} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button9} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button10} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button11} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button12} onPress={handleButtonPress}></TouchableOpacity>
      <TouchableOpacity style={styles.button13} onPress={handleButtonPress}></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  radio: {
    marginTop: 50,
    height: 520,
    width: 370
  },
  button1: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 202,
    right: 138,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button2: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 202,
    right: 80,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button3: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 202,
    right: 26,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button4: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 243,
    right: 138,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button5: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 250,
    right: 82,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button6: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 243,
    right: 26,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button7: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 284,
    right: 134,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button8: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 292,
    right: 83,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button9: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 284,
    right: 31,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button10: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 350,
    right: 112,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button11: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 350,
    right: 57,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button12: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 387,
    right: 109,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  },
  button13: {
    height: 38,
    width: 38,
    position: "absolute",
    top: 387,
    right: 62,
    backgroundColor: "rgba(0, 0, 0, .5)",
    padding: 10,
    borderRadius: 50
  }
});