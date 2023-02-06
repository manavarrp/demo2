import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import styles from '../../styles/Username.module.css';
import Logo from '../../common/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = ({ login, loading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    UserName: '',
    Password: '',
  });

  const router = useRouter();
  const { UserName, Password } = formData;

  const [activated, setActivated] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(UserName, Password);
    setActivated(true);
    console.log(formData);
  };

  useEffect(() => {
    if (activated) {
      router.push('/profile');
    }
  }, [router, activated]);

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
          <form className="py-1" onSubmit={(e) => onSubmit(e)}>
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
                type="email"
                placeholder="email"
                className={styles.textbox}
                autoFocus
                name="UserName"
                value={UserName}
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                className={styles.textbox}
                name="Password"
                value={Password}
                onChange={(e) => onChange(e)}
                required
              />

              {loading}
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

const mapStateToProps = (state) => ({
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  login,
})(Login);
