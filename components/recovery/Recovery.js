import React, { useEffect, useState } from 'react';
import styles from '../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../redux/actions/auth';
import Footer from '../footer/Footer';
import Logo from '../../common/logo';

const ResetPasswordConfirm = ({ reset_password_confirm, loading }) => {
  const { query } = useRouter();
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    newPassword: '',
    ConfirmPassword: '',
  });

  const { newPassword, ConfirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const token = query.token;
    const uid = query.uid;

    reset_password_confirm(uid, token, newPassword, ConfirmPassword);
    if (newPassword === ConfirmPassword) setRequestSent(true);
  };

  useEffect(() => {
    if (requestSent) {
      router.push('/login');
    }
  }, [router, requestSent]);
  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <Logo />
            <div className="title flex flex-col items-center">
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
                  value={newPassword}
                  onChange={(e) => onChange(e)}
                  autoFocus
                  name="newPassword"
                />
                <input
                  type="text"
                  placeholder="Confirmar Contraseña"
                  className={styles.textbox}
                  autoFocus
                  name="ConfirmPassword"
                  value={ConfirmPassword}
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
};

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  reset_password_confirm,
})(ResetPasswordConfirm);
