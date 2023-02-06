import React from 'react';
import styles from '../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../../helper/validate';
import Logo from '../../common/logo';

function Reset() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: '',
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen pt-1 pb-1">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <Logo />
            <span className="py-4 text-xl w-2/3 text-center text-gray">
              Ingresa la nueva Contraseña
            </span>
          </div>
          <form className="py-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                type="text"
                placeholder="Contraseña Nueva"
                className={styles.textbox}
                autoFocus
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                type="text"
                placeholder="Confirmar Contraseña"
                className={styles.textbox}
                autoFocus
              />
              <button type="submit" className={styles.btn}>
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
