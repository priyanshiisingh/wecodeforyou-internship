import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Signup from "../SignupPage/Signup";
import Login from "../LoginPage/Login";

function Home({ navigation }) {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("Signup");
        }}>
        <Text>Sign Up</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

export default Home;
