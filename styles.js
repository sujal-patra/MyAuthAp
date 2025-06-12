// styles/loginScreenStyles.js

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const COLORS = {
  primary: '#4CAF50',
  secondary: '#2E7D32',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#BDBDBD',
  lightGray: '#F5F5F5',
  inputBackground: 'rgba(255, 255, 255, 0.9)',
  error: '#E53935',
};

const SIZES = {
  base: 10,
  font: 14,
  radius: 10,
  padding: 20,
  inputHeight: 50,
  buttonHeight: 50,
};

const FONTS = {
  regular: {
    fontSize: SIZES.font,
    color: COLORS.black,
  },
  medium: {
    fontSize: SIZES.font + 2,
    fontWeight: '500',
    color: COLORS.black,
  },
  bold: {
    fontSize: SIZES.font + 4,
    fontWeight: 'bold',
    color: COLORS.white,
  },
};

const loginScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
  },
  headerContainer: {
    marginTop: SIZES.padding * 3,
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'center',
  },
  input: {
    height: SIZES.inputHeight,
    backgroundColor: COLORS.inputBackground,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding / 1.5,
    marginBottom: SIZES.base * 1.5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.black,
  },
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.font - 1,
    marginBottom: SIZES.base,
    marginLeft: 2,
  },
  button: {
    height: SIZES.buttonHeight,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.base * 2,
  },
  buttonText: {
    ...FONTS.bold,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.base * 2,
  },
  linkText: {
    fontSize: SIZES.font,
    color: COLORS.secondary,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.base * 3,
  },
  switchText: {
    fontSize: SIZES.font,
    color: COLORS.black,
  },
  switchLink: {
    fontSize: SIZES.font,
    color: COLORS.black,
    marginLeft: SIZES.base / 2,
  },
});

export default loginScreenStyles;
