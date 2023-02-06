import React from 'react';
import Activate from '../../../components/activate/Activate';

const activate = () => {
  return (
    <>
      <Activate />
    </>
  );
};

export default activate;

activate.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
