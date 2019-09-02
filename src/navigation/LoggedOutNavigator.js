import React from 'react';
import { createStackNavigator } from 'react-navigation';

// screens
import LoginScreen from '../screens/login/LoginScreen';

//
export default createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
});
