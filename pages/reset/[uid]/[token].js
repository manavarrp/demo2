import React from 'react';
import Recovery from '../../../components/recovery/Recovery';

const confirma_password = () => {
  return (
    <>
      <Recovery />
    </>
  );
};

export default confirma_password;

confirma_password.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
