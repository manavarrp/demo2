import React from 'react';
import Footer from '../components/footer/Footer';

import Loginpage from '../components/loginpage/loginpage';

const login = () => {
  return (
    <>
      <Loginpage />
      <Footer />
    </>
  );
};

export default login;

login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
