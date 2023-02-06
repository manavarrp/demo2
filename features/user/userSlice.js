// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  userLogin,
  recoveryPassword,
  reset_password_confirm,
  logout,
} from './authActions';

// initialize userToken from local storage

const initialState = {
  loading: false,
  userInfo: null,
  userToken:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('userToken')
      : false,
  error: null,
  success: false,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.message = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //recovery password
    [recoveryPassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [recoveryPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [recoveryPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //reset password confirm
    [reset_password_confirm.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [reset_password_confirm.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [reset_password_confirm.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //logout
    [logout.rejected]: (state, { payload }) => {
      state.userToken = null;
      localStorage.removeItem('token');
    },
  },
});
export const selectAuth = (state) => state.authState.userInfo;

export default authSlice.reducer;
