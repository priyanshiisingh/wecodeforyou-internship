import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

//Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../database/Database";

function Login({ navigation }) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const loginUser = () => {
    if (email === "" && password === "") {
      Alert.alert("Please input credentials");
    } else {
      try {
        signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            Alert.alert("User Logged In!");

            navigation.navigate("Dashboard");
          })
          .catch((err) => {
            if (err.code === "auth/wrong-password") {
              Alert.alert("Incorrect password. Please try again.");
            } else if (err.code === "auth/user-not-found") {
              Alert.alert("User not found. Please check your credentials.");
            } else if (err.code === "auth/invalid-email") {
              Alert.alert("Please enter valid email address.");
            } else if (err.code === "auth/internal-error") {
              Alert.alert("Please check email and password.");
            } else if (err.code === "auth/missing-email") {
              Alert.alert("Please enter email.");
            }
            console.log(err.message);
          });
      } catch (error) {
        Alert.alert(error);
      }
    }
  };

  return (
    <View style={styles.mainDiv}>
      <TextInput
        style={styles.inputTop}
        onChangeText={(UserEmail) => setEmail(UserEmail)}
        value={email}
        keyboardType="email-address"
        placeholder="Email"
      />
      <TextInput
        style={styles.inputBottom}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          loginUser();
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Signup")}>
        Don't have an account yet?{"\n"} Click here to SignUp!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
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
    lineHeight: 25,
    padding: 4,
    borderRadius: 30,
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

export default Login;
