// LoginScreen.js
import styles from '../../styles/Username.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Error';
// LoginScreen.js
import { useEffect, useState } from 'react';
import { userLogin } from '../../features/user/authActions';
import Logo from '../../common/logo';

const Loginpage = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const [activated, setActivated] = useState(false);
  // redirect authenticated user to profile screen

  const submitForm = (data) => {
    console.log(data);
    dispatch(userLogin(data));
    setActivated(true);
  };

  useEffect(() => {
    if (userInfo && activated) {
      router.push('/profile', userInfo);
    }
  }, [router, userInfo, activated]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen my-6">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <Logo />
            <span className=" text-center text-gray ml-6">
              Credito al alcance de todos
            </span>
          </div>
          <form className="py-1" onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
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
                id="email-address"
                name="email"
                type="email"
                placeholder="email"
                className={styles.textbox}
                autoFocus
                {...register('email')}
                required
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                className={styles.textbox}
                {...register('password')}
                required
              />
              <button type="submit" className={styles.btn} disabled={loading}>
                {loading ? 'cargando' : 'Login'}
              </button>
            </div>
            <div className="text-center py-4 text-gray">
              <span>
                ¿ No eres usuario ?
                <Link className="text-darkBlue" href="/register">
                  {' '}
                  Registrate ahora
                </Link>
              </span>
            </div>
            <div className="text-center py-2 text-gray">
              <span>
                ¿ No recuerdas tu contraseña ?
                <Link className="text-darkBlue" href="/recovery">
                  {' '}
                  Recuperala
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
