import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
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
