// screens/SignupScreen.js
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableHighlight, Pressable, Image, Alert, StyleSheet,
} from 'react-native';
import loginScreenStyles from '../styles/loginScreenStyles';

const SignupScreen = ({ navigation }) => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: '', lastName: '', email: '', password: '',
  });

  const handleSignUp = () => {
    console.log('Signup credentials:', signUpCredentials);
    Alert.alert('Signup successful!');
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/035/353/889/non_2x/ai-generated-branch-with-green-leaves-in-sunlight-bokeh-effect-summer-background-ai-generated-photo.jpg' }}
        style={styles.backgroundImage}
        blurRadius={3}
      />
      <View style={loginScreenStyles.headerContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/1b/79/0b/1b790b24b15d40d69584543e600649d8.jpg',
          }}
          style={loginScreenStyles.logo}
        />
      </View>

      <View style={loginScreenStyles.contentContainer}>
        <TextInput
          placeholder="Enter your first name"
          style={loginScreenStyles.input}
          placeholderTextColor="#777"
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, firstName: text }))
          }
        />
        <TextInput
          placeholder="Enter your last name"
          style={loginScreenStyles.input}
          placeholderTextColor="#777"
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, lastName: text }))
          }
        />
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          style={loginScreenStyles.input}
          placeholderTextColor="#777"
          onChangeText={(text) =>
            setSignUpCredentials((prev) => ({ ...prev, email: text }))
          }
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={loginScreenStyles.input}
          placeholderTextColor="#777"
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
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={loginScreenStyles.switchLink}> Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});

export default SignupScreen;
