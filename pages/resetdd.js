import React from 'react';
import Footer from '../components/footer/Footer';
import Reset from '../components/reset/reset';

const reset = () => {
  return (
    <>
      <Reset />
      <Footer />
    </>
  );
};

export default reset;

reset.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
