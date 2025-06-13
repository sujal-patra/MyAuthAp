import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (username, password) => {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error('Invalid credentials');
  const data = await res.json(); // contains token
  await AsyncStorage.setItem('accessToken', data.token);
  return data;
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem('accessToken');
};

export const isLoggedIn = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return !!token;
};
