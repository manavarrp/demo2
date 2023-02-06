import { useState, useEffect } from 'react';
import styles from '../../styles/Username.module.css';
import { connect } from 'react-redux';
import { reset_password } from '../../redux/actions/auth';

import Logo from '../../common/logo';
import { useRouter } from 'next/router';

const Reset = ({ reset_password, loading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();

  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };

  useEffect(() => {
    if (requestSent) {
      router.push('/login');
    }
  }, [router, requestSent]);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <Logo />

              <span className="py-4 text-xl w-2/3 text-center text-gray">
                Recuperar
              </span>
            </div>
            <form className="pt-20" onSubmit={(e) => onSubmit(e)}>
              <div className="textbox flex flex-col items-center gap-6">
                <span className="py-4 text-sm text-left text-gray">
                  Ingresa tu correo electronico
                </span>
                <input
                  type="email"
                  placeholder="email"
                  className={styles.textbox}
                  autoFocus
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                <button type="submit" className={styles.btn} disabled={loading}>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  reset_password,
})(Reset);
