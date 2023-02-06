import styles from '../../styles/Username.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Logo from '../../common/logo';
import { connect } from 'react-redux';
import { activate } from '../../redux/actions/auth';

const Activate = ({ activate, loading }) => {
  const [activated, setActivated] = useState(false);
  const router = useRouter();
  const { query } = useRouter();
  const activate_account = () => {
    const token = query.token;
    const uid = query.uid;
    activate(uid, token);

    setActivated(true);
  };

  useEffect(() => {
    if (activated) {
      router.push('/login');
    }
  }, [router, activated]);

  return (
    <>
      <div className="container mx-auto pb-2">
        <div className="flex justify-center items-center h-screen py-1">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <Logo />
              <span className="py-4 text-xl w-2/3 text-center text-gray">
                Activar correo
              </span>
            </div>

            <div className="max-w-3xl ml-14">
              <button
                onClick={activate_account}
                className={styles.btn}
                disabled={loading}
              >
                {loading ? 'cargando' : 'Confirmar'}
              </button>
            </div>
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
  activate,
})(Activate);
