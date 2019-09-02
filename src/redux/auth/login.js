import faker from 'faker';

//
import NavigationService from '../../navigation/NavigationService';

//
import { loggedIn } from './auth';

// initial state
export const initialState = {
  isLoading: false,
  errorMessage: null,
};

// actions
const LOGGING_IN = 'Auth/Login/LOGGING_IN';
const LOGIN_FAILURE = 'Auth/Login/LOGIN_FAILURE';
const LOGIN_SUCCESS = 'Auth/Login/LOGIN_SUCCESS';

// action creators
function loggingIn() {
  return {
    type: LOGGING_IN,
  };
}

function loginFailure(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    errorMessage,
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

async function apiLogin(data) {
  // @TODO: apply login api
  // fake login
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = faker.random.boolean();

      // success
      if (success) {
        resolve({
          success,
          user: {
            name: faker.name.findName(),
          },
        });
        return;
      }

      // error
      resolve({
        success: false,
        message: 'Login failed.',
      });
    }, 1000);
  });
}

export function login(data) {
  return async dispatch => {
    // start login - loading state
    dispatch(loggingIn());

    // api
    const { success, message, user } = await apiLogin(data);

    // success
    if (success) {
      dispatch(loginSuccess());
      dispatch(loggedIn(user));

      // navigate to main
      NavigationService.navigate('Main');
    } else {
      // failure
      dispatch(loginFailure(message));
    }
  };
}

// reducers
export default function loginReducer(state, action) {
  switch (action.type) {
    // logging in
    case LOGGING_IN:
      return {
        ...state,
        isLoading: true,
      };
    // login fail
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    // logged success
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    // default
    default:
      return state;
  }
}
