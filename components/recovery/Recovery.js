import React from 'react';
import styles from '../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Recovery() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) router.push('/login');
    // redirect authenticated user to profile screen
    if (userInfo) router.push('/login');
  }, [router, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.cpassword) {
      alert('Password mismatch');
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Recuperar</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray">
              Ingresa mensaje tu correo
            </span>
          </div>
          <form className="pt-20" onSubmit={handleSubmit(submitForm)}>
            <div className="textbox flex flex-col items-center gap-6">
              <span className="py-4 text-sm text-left text-gray">
                Ingresa 6 digitos enviados a tu email
              </span>
              <input
                type="email"
                placeholder="email"
                className={styles.textbox}
                autoFocus
              />
              <button type="submit" className={styles.btn}>
                Recuperar
              </button>
            </div>
          </form>
          <div className="text-center py-4">
            <span className="text-gray-500">
              ¿No llegó codigo OTP?{' '}
              <button className="text-blue">Re-enviar</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
