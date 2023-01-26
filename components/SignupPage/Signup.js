import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../database/Database";

function Signup({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpass, setCpass] = useState();

  const registerUser = () => {
    if (email === "" && password === "") {
      Alert.alert("Please input credentials");
    } else {
      try {
        if (cpass === password) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              const user = userCredential.user;
              await updateProfile(auth.currentUser, { displayName: name });

              Alert.alert("User Registered Successfully!");
              navigation.navigate("Login");
            })
            .catch((err) => {
              if (err.code === "auth/email-already-in-use") {
                Alert.alert("Email already in use. Please Login.");
              } else if (err.code === "auth/internal-error") {
                Alert.alert("Please check email and password.");
              } else if (err.code === "auth/missing-email") {
                Alert.alert("Please enter email.");
              } else if (err.code === "auth/invalid-email") {
                Alert.alert("Please enter valid email address.");
              } else if (err.code === "auth/weak-password") {
                Alert.alert("Password should be atleast 6 characters.");
              } else if (err.code === "auth/admin-restricted-operation") {
                Alert.alert("Admin Restricted Operation.");
              }
              console.log(err.message);
            });
        } else {
          Alert.alert(
            "Confirm password and password should be same. Please try again."
          );
        }
      } catch (error) {
        Alert.alert(error);
      }
    }
  };

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputTop: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "grey",
    width: "80%",
    padding: 10,
    marginBottom: "5%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 3,
    borderColor: "grey",
    width: "80%",
    padding: 10,
    marginBottom: "5%",
  },
  inputBottom: {
    backgroundColor: "white",
    height: 40,
    width: "80%",
    padding: 10,
    borderWidth: 3,
    marginBottom: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "grey",
  },

  loginText: {
    color: "white",
    marginTop: 25,
    textAlign: "center",
    backgroundColor: "black",
    width: "80%",
    height: 35,
    padding: 6,
    borderRadius: 15,
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
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Signup;
