import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { reset_password_confirm } from '../../../features/user/authActions';
import Footer from '../../../components/footer/Footer';
import Logo from '../../../components/logo/';

function reset() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query } = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [requestSent, setRequestSent] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: '',
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const token = query.token;
    const uid = query.uid;

    dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
    if (new_password === re_new_password) setRequestSent(true);
    if (success && requestSent) router.push('/login');
  };

  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <Logo />
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Reset</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray">
                Ingresa la nueva Contraseña
              </span>
            </div>
            <form className="py-20" onSubmit={(e) => onSubmit(e)}>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  type="text"
                  placeholder="Contraseña Nueva"
                  className={styles.textbox}
                  value={new_password}
                  onChange={(e) => onChange(e)}
                  autoFocus
                  name="new_password"
                />
                <input
                  type="text"
                  placeholder="Confirmar Contraseña"
                  className={styles.textbox}
                  autoFocus
                  name="re_new_password"
                  value={re_new_password}
                  onChange={(e) => onChange(e)}
                />
                <button type="submit" className={styles.btn} disabled={loading}>
                  {loading ? 'cargando' : 'Acceder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default reset;

reset.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
