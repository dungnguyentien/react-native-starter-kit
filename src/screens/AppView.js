import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

//
import theme from '../constants/Theme';

//
import AppNavigator from '../navigation/AppNavigator';
import NavigationService from '../navigation/NavigationService';

// the screen
export default function AppView() {
  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </ThemeProvider>
  );
}
