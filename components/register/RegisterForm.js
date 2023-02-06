import React, { useState } from 'react';
import styles from '../../styles/Username.module.css';
import Link from 'next/link';
import avatar from '../../public/profile.png';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Error';
import { registerUser } from '../../features/user/authActions';
import { useRouter } from 'next/router';
import axios from 'axios';
import Logo from '../../common/logo';

function Password() {
  const munipalities = [
    {
      id: 1,
      name: 'Michoacan',
    },
    {
      id: 2,
      name: 'Taxtaln',
    },
    {
      id: 3,
      name: 'Mexido DF',
    },
  ];

  const sexs = [
    {
      id: 1,
      name: 'Masculino',
    },
    {
      id: 2,
      name: 'Femenino',
    },
  ];

  const typeIdenfications = [
    {
      id: 1,
      name: 'CURP',
    },
    {
      id: 2,
      name: 'Extranjeria',
    },
  ];

  const { loading, userInfo, error, success, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const [getIdMun, setGetIdMun] = useState('');

  const [getIdSex, setGetIdSex] = useState('');

  const [getIdIden, setGetIdIden] = useState('');

  const [hasPromo, setHasPromo] = useState(false);

  const onChangeCheckBox = (e) => {
    setHasPromo(e.target.checked);
  };

  const [promo, setPromo] = useState('');
  const onChangePromo = (e) => {
    setPromo(e.target.value);
  };
  // const [munipalities, setMunipalities] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post(`http://localhost:8080/user/get`);
  //     const newData = await response.json();
  //     setMunipalities(await newData);
  //     // console.log(newData);
  //   };
  //   fetchData();
  // }, []);

  // const [sexs, setSexs] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post(`http://localhost:8080/user/get`);
  //     const newData = await response.json();
  //     setSexs(await newData);
  //     // console.log(newData);
  //   };
  //   fetchData();
  // }, []);

  // const [typeIdenfications, settypeIdenfications] = useState([]);

  //useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post(`http://localhost:8080/user/get`);
  //     const newData = await response.json();
  //     setSexs(await newData);
  //     // console.log(newData);
  //   };
  //   fetchData();
  // }, []);

  const handleMunipality = (event) => {
    const getId = event.target.value;
    console.log(getId);
    setGetIdMun(getId);
  };

  const handleSex = (event) => {
    const getId = event.target.value;
    console.log(getId);
    setGetIdSex(getId);
  };

  const handleIdentifation = (event) => {
    const getId = event.target.value;
    console.log(getId);
    setGetIdIden(getId);
  };

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
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen my-80">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <Logo />

            <span className="py-4 text-xl w-2/3 text-center text-gray">
              Registrarse
            </span>
          </div>

          <form className="py-1" onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <Image
                  src={avatar}
                  alt="avatar"
                  className={styles.profile_img}
                />
              </label>
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              {error && <Error>{error}</Error>}
              <div className="name flex w-3/4 gap-6">
                <input
                  type="text"
                  placeholder="Primer nombre"
                  className={styles.textbox}
                  {...register('firstName')}
                  required
                />
                <input
                  type="text"
                  placeholder="Segundo nombre"
                  className={styles.textbox}
                  {...register('secondName')}
                />
              </div>
              <div className="name flex w-3/4 gap-6">
                <input
                  type="text"
                  placeholder="Apellido Paterno"
                  className={styles.textbox}
                  {...register('firstLastName')}
                  required
                />
                <input
                  type="text"
                  placeholder="Apellido Materno "
                  className={styles.textbox}
                  {...register('secondLastName')}
                />
              </div>
              <div className="name flex w-3/4 gap-6 sm:">
                <input
                  {...register('email')}
                  required
                  type="text"
                  placeholder="Email"
                  className={styles.textbox}
                />
                <input
                  {...register('phone')}
                  required
                  type="text"
                  placeholder="phone"
                  className={styles.textbox}
                />
              </div>

              <div className="name flex w-3/4 gap-6 sm:">
                <input
                  type="date"
                  {...register('date')}
                  placeholder="Fecha de nacimiento"
                  className={styles.textbox}
                />
              </div>

              <div className="name flex w-3/4 gap-6 sm:">
                <select
                  className={styles.textbox}
                  onChange={(e) => handleMunipality(e)}
                  required
                  {...register('municipality')}
                >
                  <option value="">Escoge tu municipalidad</option>

                  {munipalities.map((munipalitie) => (
                    <option value={munipalitie.id} key={munipalitie.id}>
                      {munipalitie.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="name flex w-3/4 gap-6 sm:">
                <select
                  className={styles.textbox}
                  onChange={(e) => handleSex(e)}
                  required
                  {...register('sex')}
                >
                  <option value="">Selecciona tu sexo</option>

                  {sexs.map((sex) => (
                    <option value={sex.id} key={sex.id}>
                      {sex.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="name flex w-3/4 gap-6 ">
                <select
                  className={styles.textbox}
                  onChange={(e) => handleIdentifation(e)}
                  required
                >
                  <option value="">Selecciona tipo de identificacion</option>

                  {typeIdenfications.map((typeIdenfication) => (
                    <option
                      value={typeIdenfication.id}
                      key={typeIdenfication.id}
                    >
                      {typeIdenfication.name}
                    </option>
                  ))}
                </select>
              </div>
              {getIdIden === '1' && (
                <button type="submit" className={styles.btn} disabled={loading}>
                  {loading
                    ? 'cargando'
                    : 'Valida tu CURP con los datos ingresados'}
                </button>
              )}
              {getIdIden === '1' && (
                <div className="name flex flex-col w-3/4 gap-6 ">
                  <label className="w-full">
                    Por favor valida si tu CURP es correcto:{' '}
                  </label>
                  <input
                    {...register('identification')}
                    value={getIdIden}
                    className="visibility: hidden"
                  />
                  <input className={styles.textbox} readOnly />
                </div>
              )}

              {getIdIden === '2' && (
                <div className="name flex flex-col w-3/4 gap-6 ">
                  <label className="w-full">
                    Por favor ingresa tu numero de extrajeria
                  </label>
                  <input
                    {...register('identification')}
                    value={getIdIden}
                    className="visibility: hidden"
                  />
                  <input className={styles.textbox} />
                </div>
              )}

              <div className="name flex w-3/4 gap-6 sm:">
                <input
                  {...register('password')}
                  required
                  type="text"
                  placeholder="# password"
                  className={styles.textbox}
                />
                <input
                  {...register('cpassword')}
                  required
                  type="text"
                  placeholder="cpassword"
                  className={styles.textbox}
                />
              </div>

              <div className="flex items-center gap-3 text-gray">
                <input
                  type="checkbox"
                  checked={hasPromo}
                  onChange={onChangeCheckBox}
                />
                <span>¿Tienes número de convenio con tu empresa?</span>
              </div>
              {hasPromo && (
                <input
                  type="text"
                  placeholder="Número convenio"
                  className={styles.textbox}
                  autoFocus
                  value={promo}
                  onChange={onChangePromo}
                />
              )}

              <button type="submit" className={styles.btn} disabled={loading}>
                {loading ? 'cargando' : 'Register'}
              </button>
            </div>
            <div className="text-center py-4">
              <span>
                ¿Estas registrado?
                <Link className="text-blue" href="/login">
                  {' '}
                  Ingresa
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;