import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Dashboard from "./components/DashboardPage/Dashboard";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import Database from "./database/Database";

function Body() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Body />
    </NavigationContainer>
  );
}
