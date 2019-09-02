// navigation
import NavigationService from '../../navigation/NavigationService';

// initial state
export const initialState = {
  user: null,
};

// actions
const LOGGED_IN = 'Auth/LOGGED_IN';
const LOGGED_OUT = 'Auth/LOGGED_OUT';

// action creators
export function loggedIn(user) {
  return {
    type: LOGGED_IN,
    user,
  };
}

function loggedOut() {
  return {
    type: LOGGED_OUT,
  };
}

export function logout() {
  return dispatch => {
    dispatch(loggedOut());

    // navigate to login screen
    NavigationService.navigate('LoggedOut');
  };
}

// reducer
export default function authReducer(state, action) {
  switch (action.type) {
    // logged in
    case LOGGED_IN:
      return {
        ...state,
        user: action.user,
      };
    // logged out
    case LOGGED_OUT:
      return {
        ...state,
        user: null,
      };
    // default
    default:
      return state;
  }
}
