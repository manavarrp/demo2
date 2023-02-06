import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
  LOGOUT,
} from '../actions/type';

const initialState = {
  token:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('userToken')
      : false,
  refresh:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('userToken')
      : false,
  isAuthenticated: null,
  user: null,
  loading: false,
};

export default function Auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAIL:
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        refresh: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refresh', payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        token: localStorage.getItem('token'),
        refresh: localStorage.getItem('refresh'),
      };

    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
    case RESET_PASSWORD_SUCCESS:
    case RESET_PASSWORD_FAIL:
    case RESET_PASSWORD_CONFIRM_SUCCESS:
    case RESET_PASSWORD_CONFIRM_FAIL:
      return {
        ...state,
      };

    case REFRESH_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: localStorage.getItem('token'),
      };

    case SIGNUP_SUCCESS:
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case REFRESH_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      return {
        ...state,
        token: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
