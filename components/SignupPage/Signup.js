import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import auth from "@react-native-firebase/auth";

function Signup() {
  auth()
    .createUserWithEmailAndPassword(
      "jane.doe@example.com",
      "SuperSecretPassword!"
    )
    .then(() => {
      console.log("User account created & signed in!");
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    });
  return (
    <View>
      <TextInput
        style={styles.inputTop}
        onChangeText={(UserName) => setName(UserName)}
        placeholder="Name"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={(UserEmail) => setEmail(UserEmail)}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        placeholder="Password"
        value={password}
      />
      <TextInput
        style={styles.inputBottom}
        secureTextEntry={true}
        onChangeText={(UserCPassword) => setCpass(UserCPassword)}
        placeholder="Confirm Password"
        value={cpass}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          registerUser();
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Text
        style={styles.loginText}
        onPress={() => {
          setName("");
          setEmail("");
          setPassword("");
          setCpass("");
        }}>
        Clear
      </Text>

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Login")}>
        Already Registered? Click here to login!
      </Text>
    </View>
  );
}

export default Signup;
