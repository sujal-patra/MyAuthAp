// screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableHighlight, Pressable, Image, Alert, Switch, StyleSheet,
} from 'react-native';
import loginScreenStyles from '../styles/loginScreenStyles';

const LoginScreen = ({ navigation }) => {
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const { email, password } = loginCredentials;
    if (email === 'sujalptr2@gmail.com' && password === '1234') {
      Alert.alert('Login Successful!', rememberMe ? 'We will remember you!' : '');
    } else {
      Alert.alert('Wrong email or password');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1669732922459-0d1946366259?fm=jpg&q=60&w=3000' }}
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
          placeholder="Enter your email"
          style={loginScreenStyles.input}
          placeholderTextColor="#777"
          keyboardType="email-address"
          onChangeText={(text) =>
            setLoginCredentials((prev) => ({ ...prev, email: text }))
          }
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={loginScreenStyles.input}
          placeholderTextColor="#777"
          onChangeText={(text) =>
            setLoginCredentials((prev) => ({ ...prev, password: text }))
          }
        />

        <View style={loginScreenStyles.row}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{ false: '#ccc', true: '#4CAF50' }}
              thumbColor={rememberMe ? '#2E7D32' : '#f4f3f4'}
            />
            <Text style={loginScreenStyles.linkText}>Remember me</Text>
          </View>
          <Pressable onPress={() => Alert.alert('Reset Password', 'Link sent!')}>
            <Text style={loginScreenStyles.linkText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <TouchableHighlight
          style={loginScreenStyles.button}
          underlayColor="#388E3C"
          onPress={handleLogin}
        >
          <Text style={loginScreenStyles.buttonText}>Login</Text>
        </TouchableHighlight>

        <View style={loginScreenStyles.switchContainer}>
          <Text style={loginScreenStyles.switchText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={loginScreenStyles.switchLink}> Sign up</Text>
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

export default LoginScreen;
