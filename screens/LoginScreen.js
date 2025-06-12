import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Pressable, Image, Alert } from 'react-native';
import loginScreenStyles from '../styles';

const LoginScreen = ({ switchToSignup }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const { email, password } = loginCredentials;
    if (email === 'sujalptr2@gmail.com' && password === '1234') {
      Alert.alert('Login Successful!');
    } else {
      Alert.alert('Wrong email or password');
    }
  };

  return (
    <>
      <View style={loginScreenStyles.headerContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/1b/79/0b/1b790b24b15d40d69584543e600649d8.jpg',
          }}
          style={loginScreenStyles.logo}
          resizeMode="cover"
        />
      </View>

      <View style={loginScreenStyles.contentContainer}>
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="#777"
          style={loginScreenStyles.input}
          onChangeText={(text) =>
            setLoginCredentials((prev) => ({ ...prev, email: text }))
          }
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor="#777"
          style={loginScreenStyles.input}
          onChangeText={(text) =>
            setLoginCredentials((prev) => ({ ...prev, password: text }))
          }
        />

        <TouchableHighlight
          style={loginScreenStyles.button}
          underlayColor="#388E3C"
          onPress={handleLogin}
        >
          <Text style={loginScreenStyles.buttonText}>Login</Text>
        </TouchableHighlight>

        <View style={loginScreenStyles.switchContainer}>
          <Text style={loginScreenStyles.switchText}>Don't have an account?</Text>
          <Pressable onPress={switchToSignup}>
            <Text style={loginScreenStyles.switchLink}> Sign up</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
