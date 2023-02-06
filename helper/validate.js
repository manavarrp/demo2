import { toast } from 'react-hot-toast';

/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

/** validate login page password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error('Contraseñas no coinciden...!');
  }

  return errors;
}

/** validate register form */
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}
/*************** */

/** validate password */
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error('Contraseña requerido...!');
  } else if (values.password.includes(' ')) {
    errors.password = toast.error('Contraseña errada...!');
  } else if (values.password.length < 6) {
    errors.password = toast.error(
      'Contraseña debe contener mas de 6 caracteres'
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error(
      'Contraseña debe tener al menos un caracter especial'
    );
  }

  return errors;
}

/** validate username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error('Username es requerido');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Username invalido');
  }
  return error;
}

/** validate email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error('Email requerido...!');
  } else if (values.email.includes(' ')) {
    error.email = toast.error('Email invalido...!');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error('Formato no correcto del email...!');
  }

  return error;
}
