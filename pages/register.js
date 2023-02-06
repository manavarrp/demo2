import React from 'react';
import Footer from '../components/footer/Footer';

import RegisterForm from '../components/register/RegisterForm';

const register = () => {
  return (
    <>
      <RegisterForm />
      <Footer />
    </>
  );
};

export default register;

register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
