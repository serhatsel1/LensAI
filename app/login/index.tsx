import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from "../../constants/Colors"

export default function LoginScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../../assets/images/login.jpg')} />
      <View style={styles.loginContainer}>

        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Well come to Lens AI
        </Text>
        <Text style={{ color: Colors.GRAY, textAlign: "center", marginTop: 15 }}>
          Create AI Art In Just Click
        </Text>
        <View style={styles.button}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 17 }}>
            Continue
          </Text>

        </View>
        <Text style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 13,
          color: Colors.GRAY
        }}>
          By Continuing you agree to ours Terms and Contions
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 600,
  },
  loginContainer: {
    padding: 25,
    marginTop: -20,
    backgroundColor: "white",
    height: 600,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    marginTop: 20


  }
})