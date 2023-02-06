import axios from 'axios';
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
import { setAlert } from './alert';

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      token: localStorage.getItem('access'),
    });

    try {
      const res = await axios.post(
        `https://localhost:44302/api/v1/auth/login`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const signup =
  (
    FirstName,
    SecondName,
    FirstLastName,
    SecondLastName,
    curp,
    phone,
    email
    //gender,
    //municipality
  ) =>
  async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      FirstName,
      SecondName,
      FirstLastName,
      SecondLastName,
      curp,
      phone,
      email,
      //gender,
      //municipality,
    });

    try {
      const res = await axios.post(
        `https://localhost:44302/api/v1/employees`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
        dispatch(
          setAlert(
            'Te enviamos un correo, por favor activa tu cuenta. Revisa el correo de spam',
            'green'
          )
        );
      } else {
        dispatch({
          type: SIGNUP_FAIL,
        });
        dispatch(setAlert('Error al crear cuenta', 'red'));
      }
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
      dispatch(
        setAlert('Error conectando con el servidor, intenta mas tarde.', 'red')
      );
    }
  };

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const res = await axios.get(
        `https://localhost:44302/api/v1/auth/login/me`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: USER_LOADED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const login = (UserName, Password) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  });
  load_user();
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    UserName,
    Password,
  });

  try {
    const res = await axios.post(
      `https://localhost:44302/api/v1/auth/login`,
      body,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(load_user());
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
      dispatch(setAlert('Inicio de sesión con éxito', 'green'));
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
      dispatch(setAlert('Error al iniciar sesion.', 'red'));
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
    dispatch(setAlert('Error al iniciar sesion. Intenta mas tarde', 'red'));
  }
};

export const activate = (uid, token) => async (dispatch) => {
  console.log(uid);
  console.log(token);

  uid = uid.substring(4, uid.lenght);
  token = token.substring(6, token.lenght);

  console.log(uid);
  console.log(token);

  dispatch({
    type: SET_AUTH_LOADING,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    uid,
    token,
  });

  try {
    console.log(body);
    const res = await axios.post(
      `https://localhost:44302/api/v1/auth/confirm-email`,
      body,
      config
    );
    if (res.status === 200) {
      dispatch({
        type: ACTIVATION_SUCCESS,
      });
      dispatch(setAlert('Cuenta activada correctamente', 'green'));
    } else {
      dispatch({
        type: ACTIVATION_FAIL,
      });
      dispatch(setAlert('Error activando cuenta', 'red'));
    }
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
    dispatch(
      setAlert('Error al conectar con el servidor, intenta mas tarde.', 'red')
    );
  }
};

export const refresh = () => async (dispatch) => {
  if (localStorage.getItem('refresh')) {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      refresh: localStorage.getItem('refresh'),
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: REFRESH_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: REFRESH_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: REFRESH_FAIL,
      });
    }
  } else {
    dispatch({
      type: REFRESH_FAIL,
    });
  }
};

export const reset_password = (email) => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post(
      `https://localhost:44302/api/v1/password/reset-token`,
      //`${process.env.REACT_APP_API_URL}/user/forgotPassword`,
      body,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
      dispatch(setAlert('Password reset email sent', 'green'));
    } else {
      dispatch({
        type: RESET_PASSWORD_FAIL,
      });
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
      dispatch(setAlert('Error sending password reset email', 'red'));
    }
  } catch (err) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
    });
    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
    dispatch(setAlert('Error sending password reset email', 'red'));
  }
};

export const reset_password_confirm =
  (uid, token, newPassword, confirmPassword) => async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      uid,
      token,
      newPassword,
      confirmPassword,
    });

    if (newPassword !== confirmPassword) {
      dispatch({
        type: RESET_PASSWORD_CONFIRM_FAIL,
      });
      dispatch({
        type: REMOVE_AUTH_LOADING,
      });
      dispatch(setAlert('Passwords do not match', 'red'));
    } else {
      try {
        const res = await axios.post(
          `https://localhost:44302/api/v1/password/reset`,
          //`${process.env.REACT_APP_API_URL}/user/changePassword`,
          body,
          config
        );

        if (res.status === 200) {
          dispatch({
            type: RESET_PASSWORD_CONFIRM_SUCCESS,
          });
          dispatch({
            type: REMOVE_AUTH_LOADING,
          });
          dispatch(setAlert('Password has been reset successfully', 'green'));
        } else {
          dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL,
          });
          dispatch({
            type: REMOVE_AUTH_LOADING,
          });
          dispatch(setAlert('Error resetting your password', 'red'));
        }
      } catch (err) {
        dispatch({
          type: RESET_PASSWORD_CONFIRM_FAIL,
        });
        dispatch({
          type: REMOVE_AUTH_LOADING,
        });
        dispatch(setAlert('Error resetting your password', 'red'));
      }
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert('Succesfully logged out', 'green'));
};
