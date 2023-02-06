import React, { useState } from 'react';
import styles from '../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Footer from '../../components/footer/Footer';

function recovery() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [requestSent, setRequestSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(recoveryPassword(email));
    setRequestSent(true);
    if (success && requestSent) router.push('/login');
  };

  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Recuperar</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray"></span>
            </div>
            <form className="pt-20" onSubmit={handleSubmit(submitForm)}>
              <div className="textbox flex flex-col items-center gap-6">
                <span className="py-4 text-sm text-left text-gray">
                  Ingresa tu correo electronico
                </span>
                <input
                  type="email"
                  placeholder="email"
                  className={styles.textbox}
                  autoFocus
                  {...register('email')}
                  required
                />
                <button type="submit" className="button" disabled={loading}>
                  {loading ? 'cargando' : 'Recuperar contraseña'}
                </button>
              </div>
            </form>
            <div className="text-center py-4">
              <span className="text-gray-500">
                ¿No llegó tu codigo?{' '}
                <button className="text-blue">Re-enviar</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default recovery;

recovery.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
