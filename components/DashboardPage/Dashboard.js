import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

//Firebase imports
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../database/Database";

function Dashboard() {
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

  return (
    <View>
      <Text>Name : {name}</Text>
      <Text>Email : {email}</Text>
      <Text>User Id : {id}</Text>
    </View>
  );
}

export default Dashboard;
