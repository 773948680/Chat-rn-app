import { Button, Input } from "@rneui/base";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebase";

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [name, setName] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageURL
            ? imageURL
            : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigation.popToTop();
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Enter your image Url"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageURL}
        onChangeText={setImageUrl}
      />
      <Button title="register" onPress={register} style={styles.button} />
    </View>
  );
};

export default RegistrationScreen;

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