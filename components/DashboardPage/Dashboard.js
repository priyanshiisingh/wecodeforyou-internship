import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

//Firebase imports
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../database/Database";

function Dashboard() {
  var name;
  var email;
  var logId;
  async function fetchUserInfo() {
    const userId = auth.currentUser.uid;
    console.log(userId);
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      name = docSnap.data.name;
      email = docSnap.data.email;
      logId = userId;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <View>
      <Text>Name : {name}</Text>
      <Text>Email : {email}</Text>
      <Text>User Id : {logId}</Text>
      <Pressable
        onPress={() => {
          fetchUserInfo();
        }}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

export default Dashboard;
