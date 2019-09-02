import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import LoggedOutNavigator from './LoggedOutNavigator';
import AuthInit from './AuthInit';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthInit: AuthInit,
    Main: MainNavigator,
    LoggedOut: LoggedOutNavigator,
  },
    {
      initialRouteName: 'AuthInit',
    }
  )
);
