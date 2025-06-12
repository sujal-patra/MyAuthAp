import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Pressable, Image, Alert } from 'react-native';
import loginScreenStyles from '../styles';

const SignupScreen = ({ switchToLogin }) => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    console.log('Signup credentials:', signUpCredentials);
    Alert.alert('Signup done');
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
          placeholder="Enter your first name"
          placeholderTextColor="#777"
          style={loginScreenStyles.input}
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, firstName: text }))
          }
        />
        <TextInput
          placeholder="Enter your last name"
          placeholderTextColor="#777"
          style={loginScreenStyles.input}
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, lastName: text }))
          }
        />
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="#777"
          style={loginScreenStyles.input}
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, email: text }))
          }
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor="#777"
          style={loginScreenStyles.input}
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, password: text }))
          }
        />

        <TouchableHighlight
          style={loginScreenStyles.button}
          underlayColor="#388E3C"
          onPress={handleSignUp}
        >
          <Text style={loginScreenStyles.buttonText}>Signup</Text>
        </TouchableHighlight>

        <View style={loginScreenStyles.switchContainer}>
          <Text style={loginScreenStyles.switchText}>Already have an account?</Text>
          <Pressable onPress={switchToLogin}>
            <Text style={loginScreenStyles.switchLink}> Login</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SignupScreen;
