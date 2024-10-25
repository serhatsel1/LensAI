import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { Asset } from 'expo-asset';
import Colors from '../../constants/Colors';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
export default function LoginScreen() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        // setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  // Resmi önyüklemek için useEffect içinde Asset.loadAsync kullanıyoruz
  useEffect(() => {
    Asset.loadAsync(require('../../assets/images/login.jpg'));
  }, []);

  return (
    <View style={styles.container}>
      {/* Arka plan resmi */}
      <Image style={styles.image} source={require('../../assets/images/login.jpg')} />

      {/* Giriş ekranı içeriği */}
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Welcome to Lens AI</Text>
        <Text style={styles.subtitle}>Create AI Art In Just Click</Text>

        {/* Devam butonu */}
        <TouchableOpacity style={styles.button}>
          <Text onPress={onPress} style={styles.buttonText}>Continues</Text>
        </TouchableOpacity>

        {/* Şartlar ve koşullar */}
        <Text style={styles.terms}>
          By Continuing you agree to our Terms and Conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY, // Arka plan rengi
  },
  image: {
    width: '100%',
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.GRAY,
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    width: '100%',
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  terms: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 13,
    color: Colors.GRAY,
  },
});


export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}
