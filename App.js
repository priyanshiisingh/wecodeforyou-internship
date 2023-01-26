import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Dashboard from "./components/DashboardPage/Dashboard";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import Database from "./database/Database";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Dashboard />
      <Home />
      <Login />
      <Signup />
      <Database />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
