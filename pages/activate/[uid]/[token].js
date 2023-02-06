import styles from '../../../styles/Username.module.css';
import { activate } from '../../../features/user/authActions';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../../components/footer/Footer';
import Logo from '../../../common/logo';

const activateAcc = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, userInfo, success } = useSelector((state) => state.user);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query } = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activated, setActivated] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const activate_account = () => {
    const token = query.token;
    const uid = query.uid;
    dispatch(activate(uid, token));
    setActivated(true);
    if (success && activated) router.push('/login');
  };

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

            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
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

export default activateAcc;

activateAcc.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
