import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Firebase imports
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../database/Database";

function Dashboard({ navigation }) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [id, setId] = React.useState();
  async function fetchUserInfo() {
    const userId = auth.currentUser.uid;
    console.log(userId);
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      var data = docSnap.data();
      console.log(data);

      setName(data.name);
      setEmail(data.email);
      setId(userId);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  function onExit() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth.signOut().then(() => Alert.alert("User logged out!"));
            AsyncStorage.clear();
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.mainDiv}>
      <Text style={styles.welcomeText}>Welcome User!</Text>

      <Text style={styles.text}>
        Name : <Text style={styles.inText}>{name}</Text>
      </Text>
      <Text style={styles.text}>
        Email : <Text style={styles.inText}>{email}</Text>
      </Text>
      <Text style={styles.text}>
        User Id : <Text style={styles.inText}>{id}</Text>
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          onExit();
        }}>
        <Text style={styles.buttonText}>Logout</Text>
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
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    color: "Black",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
  },
  inText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "normal",
    color: "#2196f3",
  },
  welcomeText: {
    color: "#9c27b0",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 35,
  },
});

export default Dashboard;
