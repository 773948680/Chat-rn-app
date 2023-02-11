import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from "./screens/RegistrationScreen";

const Stack = createNativeStackNavigator();
const App = () => {
return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
);
};
export default App;