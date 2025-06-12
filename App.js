import React, { useState } from 'react';
import { View, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import loginScreenStyles from './styles';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('login');

  return (
    <View style={loginScreenStyles.root}>
      <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1669732922459-0d1946366259?fm=jpg&q=60&w=3000',
        }}
        style={loginScreenStyles.backgroundImage}
        blurRadius={2}
      />

      {activeScreen === 'login' ? (
        <LoginScreen switchToSignup={() => setActiveScreen('signup')} />
      ) : (
        <SignupScreen switchToLogin={() => setActiveScreen('login')} />
      )}
    </View>
  );
};

export default App;
