import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, StatusBar } from 'react-native';

//
function AuthInit({ isUserLoggedIn, navigation }) {
  useEffect(() => {
    // console.log({ isUserLoggedIn });
    navigation.navigate(isUserLoggedIn ? 'Main' : 'LoggedOut');
  });

  //
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

// state
const mapStateToProps = state => {
  const { user } = state.auth;
  return {
    isUserLoggedIn: !!user,
  };
};

//
export default connect(mapStateToProps)(AuthInit);
