import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

//
import theme from '../../constants/Theme';

// redux
import { login } from '../../redux/auth/login';

//
function LoginScreen({ login, isLoggingIn, errorMessage }) {
  //
  const onPressLogin = () => {
    login();
  };

  //
  return (
    <View style={theme.View.container}>
      <Text>Login screen</Text>
      <Button title="Login" onPress={onPressLogin} loading={isLoggingIn} />
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
}

// state
const mapStateToProps = state => {
  const { login: { isLoading: isLoggingIn, errorMessage } = {} } = state.auth;
  return {
    isLoggingIn,
    errorMessage,
  };
};

// dispatch
const mapDispatchToProps = {
  login,
};

//
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
