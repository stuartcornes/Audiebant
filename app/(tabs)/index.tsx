import { Image, StyleSheet, Button, View, TextInput, Text } from "react-native";

import Checkbox from "expo-checkbox";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setChecked] = useState(false);

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
      <Text style={{ fontSize: 26 }}>Login</Text>
      <Text style={{ fontSize: 17, color: "grey" }}>
        Please fill out the fields below in order to access your account
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: "grey",
          marginTop: 15,
          marginBottom: -5,
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

      <Text
        style={{
          fontSize: 17,
          color: "grey",
          marginTop: 15,
          marginBottom: -5,
        }}
      >
        Password
      </Text>

      <View style={styles.container}>
        <TextInput
          // Set secureTextEntry prop to hide
          //password when showPassword is false
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          name={"lock-outline"}
          size={30}
          color="#017ac3"
          style={styles.icon2}
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#017ac3" : undefined}
          />
          <Text style={styles.paragraph}>Remember me</Text>
        </View>
        <View style={styles.section}>
          <Link href="/forget" style={styles.link}>
            Forgot password?
          </Link>
        </View>
      </View>

      <View style={{ alignContent: "center" }}>
        <Button
          color="#017ac3" //button color
          title="Login"
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 17,
            color: "grey",
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Login via
        </Text>
      </View>
      <View
        style={{
          borderColor: "#017AC3",
          borderWidth: 1,
          borderRadius: 20,
          width: 120,
          height: 120,
          marginLeft: "33%",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "grey",
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Touch ID
        </Text>

        <MaterialCommunityIcons
          name={"fingerprint"}
          size={60}
          color="#017ac3"
          style={styles.icon3}
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
    top: 90,
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
    alignItems: "left",
    justifyContent: "left",
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

  icon3: {
    marginTop: 10,
    marginLeft: 30,
    color: "#017ac3",
  },

  icon: {
    marginLeft: 10,
    color: "#017ac3",
    marginBottom: 5,
  },
  icon2: {
    left: 0,
    position: "absolute",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    marginLeft: -15,
    borderColor: "#C7E5FB",
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
  },
  link: {
    marginTop: 1,
    paddingVertical: 15,
    marginLeft: 80,
    fontSize: 16,
  },
});
