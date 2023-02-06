
import Error from '../Error';
import Link from 'next/link';
import Logo from '../../common/logo'


const Loginpage = () => {

  const { register, handleSubmit, formState: { error } } = useForm();
  
  const onLoginUser = (data) => {
    console.log(data);
  }
  
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
          <form className="py-1" onSubmit={handleSubmit(onLoginUser)}>
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
               // {...register('email')}
                required
              />
             <input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                className={styles.textbox}
                autoFocus
               // {...register('password')}
              />
              <button type="submit" className={styles.btn} disabled={loading}>  
                
                {loading ? 'cargando' : 'Acceder'}
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
}

export default Loginpage;
