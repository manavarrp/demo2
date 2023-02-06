import React from 'react';
import styles from '../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { Form, useFormik } from 'formik';
import { passwordValidate } from '../../helper/validate';

function Password() {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hellos asdasd</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray">
              Conoce mas conectandote
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <picture>
                <img
                  className={styles.profile_img}
                  src="./profile.png"
                  alt="avatar"
                />
              </picture>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                placeholder="Contraseña"
                className={styles.textbox}
                autoFocus
              />
              <button type="submit" className={styles.btn}>
                Acceder
              </button>
            </div>
            <div className="text-center py-4">
              <span>¿ No recuerdas tu contraseña ? </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
