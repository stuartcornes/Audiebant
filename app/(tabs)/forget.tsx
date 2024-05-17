import {
  Image,
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
  Switch,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import React, { useState } from "react";
import { Input, CheckBox } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#fff" }}
      headerImage={
        <Image
          source={require("@/assets/images/Audiebant_Logo-blue.png")}
          resizeMode="contain"
          style={styles.reactLogo}
        />
      }
    >
      <Text style={{ fontSize: 26 }}>Forget password?</Text>
      <Text style={{ fontSize: 17, color: "grey" }}>
        Enter your username below to recieved your password reset instructions
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: "grey",
          marginTop: 15,
          marginBottom: -13,
        }}
      >
        Username
      </Text>

      <View style={styles.container}>
        <TextInput
          // Set secureTextEntry prop to hide
          //password when showPassword is false
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          name={"account-outline"}
          size={30}
          color="#017ac3"
          style={styles.icon2}
        />
      </View>

      <View style={{ alignContent: "center", marginTop: 150 }}>
        <Button
          color="#017ac3" //button color
          title="Send"
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    textAlign: "center",
    gap: 8,
    backgroundColor: "#fff",
    color: "black",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  reactLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 290,
    top: 60,
    left: 60,
    position: "absolute",
  },

  styleLoginBtn: {
    width: 115,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 45,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#017AC3", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
  styleLoginBtn2: {
    width: 169,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 45,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#017AC3", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
  styleLoginBtnLarge: {
    width: "100%",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 45,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#017ac3", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 16,
    borderBottomColor: "#017ac3",
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderWidth: 1,
    paddingBottom: 5,
    paddingLeft: 40,

    marginLeft: -15,
  },
  icon: {
    marginLeft: 10,
    color: "#017ac3",
  },
  icon2: {
    left: 0,
    position: "absolute",
  },
  heading: {
    alignItems: "center",
    fontSize: 20,
    color: "green",
    marginBottom: 20,
  },
});
