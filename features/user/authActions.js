// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { data } from 'autoprefixer';

const backendURL = 'http://localhost:8080';

export const calculateCurp = createAsyncThunk(
  'auth/register',
  async (
    {
      firstName,
      secondName,
      firsLastName,
      secondLastName,
      email,
      phone,
      password,
      date,
      municipality,
      sex,
      identification,
    },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${backendURL}/user/signup`,
        {
          firstName,
          secondName,
          firsLastName,
          secondLastName,
          email,
          phone,
          password,
          date,
          municipality,
          sex,
          identification,
        },
        config
      );

      return;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    {
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      email,
      phone,
      password,
      date,
      municipality,
      sex,
      identification,
    },
    { resolve, rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${backendURL}/user/signup`,
        {
          firstName,
          secondName,
          firstLastName,
          secondLastName,
          email,
          phone,
          password,
          date,
          municipality,
          sex,
          identification,
        },
        config
      );
      return resolve(message.reponse.data.message);
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `${backendURL}/user/login`,
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const activate = createAsyncThunk(
  'auth/activate',
  async ({ uid, token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `https://localhost:44302/api/v1/auth/confirm-email`,
        { uid, token },
        config
      );
      return true;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const recoveryPassword = createAsyncThunk(
  'auth/activate',
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `https://localhost:44302/api/v1/password/reset-token`,
        { email },
        config
      );
      return true;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const reset_password_confirm = createAsyncThunk(
  'auth/activate',
  async (
    { uid, token, new_password, re_new_password },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `https://localhost:44302/api/v1/auth/confirm-email`,
        { uid, token, new_password, re_new_password },
        config
      );
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logout = () => {
  localStorage.removeItem('userToken');
};
