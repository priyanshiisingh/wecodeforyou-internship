import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";

function Home({ navigation }) {
  return (
    <View style={styles.mainDiv}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Signup");
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 4,
    width: "80%",
    backgroundColor: "#b7094c",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Home;
