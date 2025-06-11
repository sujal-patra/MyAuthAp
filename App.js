import React, { useState } from 'react';
import { View,Text,TextInput,TouchableHighlight,Pressable,Image,Alert,} from 'react-native';
import loginScreenStyles from './styles';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('login');
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleLogin = () => {
    const { email, password } = loginCredentials;

    if (email === 'sujalptr2@gmail.com' && password === '1234') {
      Alert.alert('Login Successful!');
    } else {
      Alert.alert(' Wrong email or password');
    }
  };

  const handleSignUp = () => {
    console.log('Signup credentials:', signUpCredentials);
    Alert.alert(' Signup one');
  };

  return (
    <View style={loginScreenStyles.root}>
      
      <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1669732922459-0d1946366259?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHQlMjBncmVlbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
        }}
        style={loginScreenStyles.backgroundImage}
        blurRadius={2}
      />

      
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
        {activeScreen === 'login' ? (
          <>
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
              <Pressable onPress={() => setActiveScreen('signup')}>
                <Text style={loginScreenStyles.switchLink}> Sign up</Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
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
              <Pressable onPress={() => setActiveScreen('login')}>
                <Text style={loginScreenStyles.switchLink}> Login</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default App;
