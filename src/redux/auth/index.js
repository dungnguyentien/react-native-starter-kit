import combineReducerHandlers from '../combileReducerHandlers';

//
import loginReducer, { initialState as loginInitialState } from './login';
import authReducer, { initialState as authInitialState } from './auth';

// initial state
const initialState = {
  login: loginInitialState,
  ...authInitialState,
};

// reducer
export default combineReducerHandlers(initialState, {
  _: authReducer,
  login: loginReducer,
});
