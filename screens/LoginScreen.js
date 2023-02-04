import { Button, Input } from '@rneui/base';
import {Pressable, View, Text, StyleSheet } from 'react-native'
import React, { useState} from 'react';

const LoginScreen = ({navigation}) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View>
        <Button
          title="sign in"
          onPress={() => {
            console.log("Bouton clic");
          }}
          style={styles.button}
        />

        <Pressable
          onPress={() => navigation.navigate("Registration")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.wrapperCustom,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.text}>
              {pressed ? "Merci!" : "New user? Join here"}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
  
}

export default LoginScreen;

const styles = StyleSheet.create({
  
    button: {
      width: 200,
      margin: 20,
    },
    container: {
      flex: 1,
      alignItems: "center",
      padding: 10,
    },
    containerButton: {
      flex: 1,
      flexDirection: "row",
    },
    text: { padding: 10 },
  
});