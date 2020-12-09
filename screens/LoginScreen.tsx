import * as WebBrowser from 'expo-web-browser';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import React, { useContext } from 'react';
import { useAuth} from "../store/auth";

import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Text, View, TextInput, TouchableOpacity } from '../components/Themed';


export default function LoginScreen(
  { navigation }: StackScreenProps<RootStackParamList, 'Login'>
) {

  const {signIn} = useAuth();
  
  function handleSign() {
    console.log('handleSign');
    signIn();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./../assets/images/login/login-theme.png")} style={styles.image}>

        <View style={styles.getStartedContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.info}>Welcome to your APP!</Text>
          <TextInput style={styles.inputGroup}
            placeholder="Username" />
          <TextInput style={styles.inputGroup}
            secureTextEntry={true}
            placeholder="******"
          />

          <TouchableOpacity btnType="primary" style={styles.button} onPress={handleSign}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedContainer: {
    borderRadius: 7,
    borderColor: '#ced4da',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  info: {
    marginBottom: 15
  },
  inputGroup: {
    backgroundColor: '#FFF',
    borderColor: '#ced4da',
    borderWidth: 1,
    width: '100%',
    borderRadius: 7,
    padding: 10,
    marginBottom: 15
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: '#FFF'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  }
});
