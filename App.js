import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
const App = () => {
return (
<SafeAreaView style={styles.container}>
<View>
<Text>Yes Yes Yes</Text>
<FontAwesomeIcon icon={faMugSaucer} />
</View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;